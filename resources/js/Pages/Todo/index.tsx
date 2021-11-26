import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { ITodo } from "../../@Types";
import Layout from "../../Layout";

interface ITodoProps {
    todos: {
        data: ITodo[];
    };
}

function Todo(props: ITodoProps) {
    return (
        <>
            <h3>Tarefas</h3>
            <div className="text-center mt-1">
                <Link href="/todo/create" className="btn btn-primary btn-sm">
                    <i className="bi bi-newspaper"></i> Novo
                </Link>
            </div>
            <table className="table table-bordered mt-2 mb-2">
                <thead>
                    <tr>
                        <th className="text-center">Id</th>
                        <th className="text-center">Descrição</th>
                        <th className="text-center">Status</th>
                        <th className="text-center">...</th>
                    </tr>
                </thead>
                <tbody>
                    {props?.todos?.data?.map((item) => (
                        <tr key={item.id}>
                            <td className="text-center">{item.id}</td>
                            <td className="text-left">{item.description}</td>
                            <td className="text-center">
                                {item.done ? "Sim" : "Não"}
                            </td>
                            <td className="text-center">
                                <Link
                                    href={`/todo/edit/${item.id}`}
                                    className="btn btn-success btn-sm"
                                >
                                    <i className="bi bi-pen"></i> Alterar
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

Todo.layout = (page: any) => <Layout children={page} />;

export default Todo;
