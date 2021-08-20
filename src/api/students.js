import { db } from './firebase';

/** @typedef { import('firebase').default.firestore.DocumentSnapshot } DocumentSnapshot */

/**
 *
 * @param {DocumentSnapshot} studentDoc Student Doc
 */
function processStudentDoc(studentDoc) {
  const data = studentDoc.data();
  return {
    id: studentDoc.id,
    clusterMission: data['cluster-mission'],
    firstName: data['first-name'],
  };
}

/**
 *
 * @param {Array<String>} studentIds Student IDs
 */
export async function studentsGetStudentsAPI(studentIds) {
  const studentDocList = await Promise.all(studentIds.map((sid) => db.collection('user').doc(sid).get()));
  const students = studentDocList.map(processStudentDoc);
  return students;
}
