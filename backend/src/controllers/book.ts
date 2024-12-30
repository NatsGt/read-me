import { pool } from "../db/db"

/**
 * @description Create note
 * @route POST /notes
 */
// export const createNote = async (req: Request, res: Response): Promise<Response> => {
//   const { title, contents } = req.body

//   if (!title || !contents)
//     return res.status(400).json({ message: "Please fill in all fields" })

//   let sql = "INSERT INTO notes (title, contents) VALUES (?, ?)"
//   await pool.query(sql, [title, contents])

//   return res.status(201).json({ message: "note has been created" })
// }

// /**
//  * @description Get all notes
//  * @route GET /notes
//  */

// export const getNotes = async (req: Request, res: Response) => {
//   let sql = "SELECT * from books"
//   const rows = await pool.query
//   //rows.json()

//   return res.status(200).json({ message: "All notes have been retrieved" })
// }
