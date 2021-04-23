import { statSync, mkdirSync, appendFile } from 'fs'
import { join } from 'path'
import { createLogger } from '@mojule/log-formatter'
import { getLocalTimestamp } from './util'

export const fsLogger = ( directory: string, useLocalTime = false ) => {
  ensureDirectory( directory )

  const getTimestamp = (
    useLocalTime ? getLocalTimestamp : () => ( new Date() ).toJSON()
  )

  const date = getTimestamp().replace( /[:\.]/g, '-' )
  const stdOut = join( directory, `stdout-${ date }.txt` )
  const stdErr = join( directory, `stderr-${ date }.txt` )

  const writeOut = ( content: string ) => append( stdOut, content )
  const writeErr = ( content: string ) => append( stdErr, content )

  const trace = writeOut
  const debug = writeOut
  const time = writeOut
  const info = writeOut
  const warn = writeErr
  const error = writeErr
  const fatal = writeErr

  const options = {
    trace, debug, time, info, warn, error, fatal, getTimestamp
  }

  const logger = createLogger( options )

  return logger
}

const ensureDirectory = ( directory: string ) => {
  try {
    if ( statSync( directory ).isDirectory() ) return
  } catch( err ){
    if( err.code !== 'ENOENT' ){
      throw err
    }
  }

  mkdirSync( directory )
}

const append = ( path, data ) => appendFile(
  path, data + '\n', 'utf8', err => {
    if ( err ) console.error( err )
  }
)
