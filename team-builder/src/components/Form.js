export default function Form (props){
    const {values,update,submit} = props;

    const onSubmit=(evt)=>{
   evt.preventDefault();
   submit();
    }

    const change =(evt)=>{
    const {name,value} = evt.target;
    update(name,value);
    };

    return(
        <form className="form-container" onSubmit={onSubmit}>
<label>Username:
    <input 
    type="text"
    name="name"
    value={values.name}
    onChange={change}>
    </input>
   
</label>
<label>
    Email:
<input 
    type="email"
    name="email"
    onChange={change}
    value={values.email}
    >
    </input>
    </label>
    <label>
        Role:
        <select name = "role" value={values.role} onChange={change}>
           <option value="">----</option>
            <option value="sportsmen">Sportsmen</option>
            <option value="designer">Designer</option>
            <option value="Web developer">Web Developer</option>
            <option value=" IT specialist">IT specialist</option>
        </select>
    </label>
    <button>Submit</button>
        
        </form>
       
    )
}