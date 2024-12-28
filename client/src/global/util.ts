const deadPattern = /(\d{4})[–-](\d{4})/;
const alivePattern = /\( *born *.*?\d+.*?\)/i;
const beforeChrist = /\(\s*.*?\d+.*?BC.*?\)/i;

export const getBirthYearFromDescription = (description: String) => {

    const dead = description.match(deadPattern);
    const alive = description.match(alivePattern);
    const deadBC = description.match(beforeChrist);

    if (dead) {
      return {
        birthYear: parseInt(dead[1], 10),
        deathYear: parseInt(dead[2], 10),
        BC: null
      };
    } else if (alive) {
      const aliveYear = alive.toString().replace(/[a-zA-Z\s()]/g, '')
      return {
        birthYear: parseInt(aliveYear),
        deathYear: new Date().getFullYear(),
        BC: null
      };
    } else if (deadBC) {
      const years = deadBC[0].toString().replace(/[a-zA-Z\s.()]/g, '')
      const yearArray = years.split('–');
      return {
        birthYear: parseInt(yearArray[0]),
        deathYear: parseInt(yearArray[1]),
        BC: 'BC'
      }
    }

    return { birthYear: null, deathYear: null };
  }

  export const isValidDescription = (description : String) => {
    return description.match(deadPattern) || description.match(alivePattern) || description.match(beforeChrist);
  }
