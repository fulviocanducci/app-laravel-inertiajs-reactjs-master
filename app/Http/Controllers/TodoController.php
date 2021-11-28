<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TodoController extends Controller
{
    protected $model;

    public function __construct(Todo $model)
    {
        $this->model = $model;
    }

    public function index()
    {
        $todos = $this->model->orderBy('description')->paginate(2)->withQueryString();
        return Inertia::render('Todo/index', compact('todos'));
    }

    public function create()
    {
        return Inertia::render('Todo/create');
    }

    public function edit($id)
    {
        $todo = $this->model->find((int)$id);
        if ($todo) {
            return Inertia::render('Todo/edit', compact('todo'));
        }
        return redirect()
            ->route('todo.index');
    }

    public function store(Request $request) 
    {
        $request->validate([
            'id' => 'required',
            'description' => 'required|min:3',
            'done' => 'required'
        ]);

        $id = $request->get('id', null);        
            
        if ((int)$id === 0){
            $this->model->create($request->only(['description','done']));
        } else {
            if ((int)$id > 0) {
                $model = $this->model->find((int)$id);
                if ($model) {                    
                    $model->fill($request->only(['description','done']));
                    $model->save();
                }
            }
        }

        return redirect()
            ->route('todo.index');
    }
}
