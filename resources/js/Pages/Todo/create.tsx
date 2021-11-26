import { Link, useForm } from "@inertiajs/inertia-react";
import React, { FormEvent, useEffect, useRef } from "react";
import Layout from "../../Layout";

const initialTodoValue = {
    id: 0,
    description: "",
    done: true,
};

function create() {
    const inputDefaultRef = useRef<HTMLInputElement>(null);
    const { data, setData, post, processing, errors, reset } =
        useForm(initialTodoValue);

    function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post("/todo/store");
        reset();
    }

    useEffect(() => {
        if (inputDefaultRef?.current) {
            inputDefaultRef.current.focus();
        }
    }, []);

    return (
        <>
            <h3>Tarefa</h3>
            <form onSubmit={submit}>
                {" "}
                <div className="form-group">
                    <label htmlFor="description" className="form-label">
                        Descrição da tarefa
                    </label>
                    <input
                        ref={inputDefaultRef}
                        type="text"
                        name="description"
                        id="description"
                        title="description"
                        placeholder="Digite a tarefa"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        className="form-control form-control-sm"
                    />
                    {errors.description && (
                        <div className="text-danger fs-6 fst-italic">
                            {errors.description}
                        </div>
                    )}
                </div>
                <div className="mt-2 mb-2">
                    <button
                        type="submit"
                        className="btn btn-primary btn-sm me-2"
                        disabled={processing}
                    >
                        <i className="bi bi-check"></i> Salvar
                    </button>
                    <Link href="/todo" className="btn btn-danger btn-sm">
                        <i className="bi bi-chevron-left"></i> Cancelar
                    </Link>
                </div>
            </form>
        </>
    );
}

create.layout = (page: JSX.Element) => <Layout children={page} />;

export default create;
