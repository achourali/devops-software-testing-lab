// https://docs.cypress.io/api/table-of-contents

describe("adding new tasks", () => {
  it("Visits the app root url", () => {
    cy.visit("localhost:8080");

    let tasks = [];
    //get initial tasks
    cy.get(".ui.segment")
      .find(".card")
      .each(($el, index, $list) => {
        tasks.push($el[0].querySelector(".description").textContent);
      });

    //add new tasks
    let newTasks = ["task A", "task B"];
    newTasks.forEach((newTask) => {
      tasks.unshift(newTask);
      cy.get("input").type(newTask);
      cy.get(".ui.action.input").within(() => {
        cy.get("button").click();
      });
    });
    cy.wait(500);

    //check tasks
    cy.get(".ui.segment")
      .find(".card")
      .each(($el, index, $list) => {
        expect($el[0].querySelector(".description").textContent).to.equal(
          tasks[index]
        );
      });
  });
});
