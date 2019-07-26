const courriers = [
  {
    ref:  5180,
    src: "Ministère des Affaires Étrangères et de la Coopération Internationale",
    obj: "Reponse a la demande de bourses aux etudiants senegalais"
  },
  {
    ref:  5181,
    src: "Ministère de la Fonction Publique et de la Modernisation de l'Administration",
    obj: "Nouvelle reforme concernan les employes de la DCP"
  },
  {
    ref:  5182,
    src: "Ministre de l'Enseignement Supérieur, de la Recherche Scientifique et de la Formation des Cadres",
    obj: "RNote relative aux dossiers des étudiants, lauréats, enseignants et administratifs des établissements d'enseignement supérieur privé"
  }
];

const makeCourrier = ({ref, src, obj}) => (
  `<tr>
    <th scope="row"></th>
    <td>${ref}</td>
    <td>${src}</td>
    <td>${obj}</td>
    <td><i class="fas fa-file-pdf"></i></td>
  </tr>`
);

$(window).on("load", () => {
  const courriersTableBody = $("#courriers");
  courriers.map(makeCourrier).forEach(line => courriersTableBody.append(line));
});