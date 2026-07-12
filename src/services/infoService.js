/**
 * Service to fetch and parse the info.txt file
 * Provides methods to extract different sections of personal information
 */

let cachedInfo = null;

export const fetchInfo = async () => {
  if (cachedInfo) return cachedInfo;

  try {
    const response = await fetch('/info.txt');
    const text = await response.text();
    cachedInfo = parseInfo(text);
    return cachedInfo;
  } catch (error) {
    console.error('Error fetching info.txt:', error);
    return null;
  }
};

const parseInfo = (text) => {
  const sections = {
    intro: extractSection(text, 'Meet Jobel', 'My Journey'),
    journey: extractSection(text, 'My Journey', 'Technical Skills'),
    technicalSkills: extractSection(text, 'Technical Skills', 'Academic'),
    academicProjects: extractSection(text, 'Academic and Personal Projects', 'Internship'),
    internship: extractSection(text, 'Internship Experience', 'Strengths'),
    strengths: extractSection(text, 'Strengths', 'My Hobbies'),
    hobbies: extractSection(text, 'My Hobbies', 'My Career'),
    goals: extractSection(text, 'My Career Goals', 'My Personal Philosophy'),
    philosophy: extractSection(text, 'My Personal Philosophy', 'Looking Ahead'),
    fullText: text,
  };

  return sections;
};

const extractSection = (text, startMarker, endMarker) => {
  const startIdx = text.indexOf(startMarker);
  const endIdx = text.indexOf(endMarker);

  if (startIdx === -1) return '';

  if (endIdx === -1) {
    return text.substring(startIdx).trim();
  }

  return text.substring(startIdx, endIdx).trim();
};

export const getProfileName = () => 'Jobel V. Golde';
export const getProfileAge = () => 22;
export const getProfileTitle = () => 'IT Graduate | Web Developer';
export const getProfileImage = () => '/images/me.jpg';
