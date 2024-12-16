// when there become any type of nesting in teh callback functions then it is called callback hell.
// which is not good practice in programming that's why it is called callback hell

function getData(data, callback) {
  setTimeout(() => {
    console.log("data is : ", data);
    callback();
  }, 1000);
}

function seeCallBackHell() {
  getData(1, () => {
    getData(2, () => {
      getData(3, () => {
        getData(4, () => {
          console.log("All data fetched");
        });
      });
    });
  });
}

// seeCallBackHell()
function fetchData(id, callback) {
  setTimeout(() => {
    console.log(`Fetched data for id: ${id}`);
    callback();
  }, 500);
}

fetchData(1, () => {
  fetchData(2, () => {
    fetchData(3, () => {
      fetchData(4, () => {
        fetchData(5, () => {
          console.log("All data fetched in second example");
        });
      });
    });
  });
});
