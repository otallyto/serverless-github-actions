describe('sum test', () =>{
  it('sum 1 + 1', ()=>{
    function sum(a,b){
      return a + b
    }
    const result = sum(1,1)
    expect(result).toEqual(2)
  })
})