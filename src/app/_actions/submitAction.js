import { revalidatePath } from "next/cache";
import { addComment, addHaiku } from "../_data/haikus";

export const createAction = async (formData) => {
    const auteur = formData.get('auteur');
    const text = formData.get('text');
    const icon_index = formData.get('icon_index');

    await addHaiku({ text, icon_index, auteur });
    return;
};

export const createComment = async (formData) => {
    const auteur = formData.get('auteur');
    const text = formData.get('text');
    const haiku_id = formData.get('haikuId'); // Correct field name

    await addComment({ haiku_id, auteur, text }); // Match the database function argument
    return;
};

