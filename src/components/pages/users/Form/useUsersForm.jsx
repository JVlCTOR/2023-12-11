import axios from "axios";
import { useEffect, useState } from "react";

export function useUsersForm() {

  return { user, handleUser, handleSubmit };
}
