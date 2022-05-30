// https://docs.cypress.io/api/table-of-contents

// describe("adding new tasks", () => {
//   it("Visits the app root url", () => {
//     cy.visit("localhost:8080");

//     let tasks = [];
//     //get initial tasks
//     cy.get(".ui.segment")
//       .find(".card")
//       .each(($el, index, $list) => {
//         tasks.push($el[0].querySelector(".description").textContent);
//       });

//     //add new tasks
//     let newTasks = ["task A", "task B"];
//     newTasks.forEach((newTask) => {
//       tasks.unshift(newTask);
//       cy.get("input").type(newTask);
//       cy.get(".ui.action.input").within(() => {
//         cy.get("button").click();
//       });
//     });
//     cy.wait(500);

//     //check tasks
//     cy.get(".ui.segment")
//       .find(".card")
//       .each(($el, index, $list) => {
//         expect($el[0].querySelector(".description").textContent).to.equal(
//           tasks[index]
//         );
//       });
//   });
// });

describe("deleting tasks", () => {
  it("Visits the app root url", () => {
    cy.visit("localhost:8080");

    let tasks = [];
    //get initial tasks
    cy.get(".ui.segment")
      .find(".card")
      .each(($el, index, $list) => {
        tasks.push($el[0].querySelector(".description").textContent);
      })
      .then(() => {
        //delete last task
        cy.get(".ui.segment").within(() => {
          cy.get(".card")
            .first()
            .within(() => {
              cy.get(".ui.red.icon.button").click();
            });
        });

        tasks.shift();

        cy.wait(500).then(() => {
          console.log(tasks);
          //check tasks
          cy.get(".ui.segment")
            .find(".card")
            .each(($el, index, $list) => {
              console.log("test");
              expect($el[0].querySelector(".description").textContent).to.equal(
                tasks[index]
              );
            });
        });
      });
  });
});
