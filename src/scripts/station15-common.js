async function main() {
    const results = await getData();
    const elem = document.getElementById("result");
    results.forEach(result => {
        let li = document.createElement('li');
        let text = document.createTextNode(result.full_name);
        li.appendChild(text);
        elem.appendChild(li);
    })
}
async function getData() {
    // Promiseを使って3秒後にフルネームを表示
    const userList = [
      { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
      { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
    ];
    
    // 3秒後にフルネームを作成する処理をPromiseでラップ
    return new Promise(resolve => {
      setTimeout(() => {
        const result = userList.map(user => {
          return {
            ...user,
            full_name: `${user.family_name} ${user.first_name}`
          };
        });
        resolve(result);
      }, 3000);  // 3秒後に実行
    });
  }
main()
