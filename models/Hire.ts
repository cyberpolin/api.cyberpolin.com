import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { checkbox, text, timestamp } from "@keystone-6/core/fields";


export default list({
    access: allowAll,
    fields:{
        name: text({validation:{isRequired: true}}),
        email: text({validation:{isRequired: true}}),
        content: text({validation:{isRequired: true}}),
        createdAt: timestamp({
            defaultValue: {kind: 'now'}
        }),
        attended: checkbox({defaultValue: false})
    }
})