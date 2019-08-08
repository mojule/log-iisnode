import { statSync, mkdirSync, appendFile } from 'fs'
import { join } from 'path'
import { createLogger } from '@mojule/log-formatter'

export const fsLogger = ( directory: string ) => {
  ensureDirectory( directory )

  const date = ( new Date() ).toJSON().replace( /[:\.]/g, '-' )
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
    trace, debug, time, info, warn, error, fatal
  }

  const logger = createLogger( options )

  return logger
}

const ensureDirectory = ( directory: string ) => {
  if ( statSync( directory ).isDirectory ) return

  mkdirSync( directory )
}

const append = ( path, data ) => appendFile(
  path, data + '\n', 'utf8', err => {
    if ( err ) console.error( err )
  }
)
