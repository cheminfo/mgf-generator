/**
 * Converts a JSON into MGF.
 * @param {array} parsedMGF Structure containing MGF data in JSON format.
 * @param {object} [options={}]
 * @param {string} [options.lineDelimiter='\n'] What delimiter must be used for the lines of the MGF.
 * @param {string} [options.spectrumDelimiter=' '] What delimiter must be used between x and y values of the spectrum.
 */
export default function generateMGF(parsedMGF, options = {}) {
  const { lineDelimiter = '\n', spectrumDelimiter = ' ' } = options;

  let data = [];

  for (let entry of parsedMGF) {
    // handle entry type at the beginning
    data.push(`BEGIN ${entry.kind}`);

    // handle metadata
    for (let key in entry.meta) {
      data.push(`${key}=${entry.meta[key]}`);
    }

    // handle spectrum
    for (let i = 0; i < entry.data.x.length; i++) {
      data.push(`${entry.data.x[i]}${spectrumDelimiter}${entry.data.y[i]}`);
    }

    // handle entry type at the end
    data.push(`END ${entry.kind}`);
  }

  return data.join(lineDelimiter);
}
