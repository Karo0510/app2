class MemoryVariable
{

   data = '' 

   setMemoryVariable(data)
   {
        this.data = data;
   }

   getMemoryVariable()
   {
        return this.data;
   }
}

export default new MemoryVariable();