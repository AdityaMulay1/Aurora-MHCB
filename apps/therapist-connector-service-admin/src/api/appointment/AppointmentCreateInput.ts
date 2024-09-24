export type AppointmentCreateInput = {
  appointmentDate?: Date | null;
  appointmentId?: string | null;
  duration?: number | null;
  notes?: string | null;
  status?: string | null;
  therapistId?: string | null;
  userId?: string | null;
};
