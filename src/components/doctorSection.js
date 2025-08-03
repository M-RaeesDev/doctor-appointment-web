
import { categories, doctors } from "@/lib/doctorCategories";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Link from "next/link";
import { Button } from "./ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import {  faHospital, faCalendarCheck } from '@fortawesome/free-regular-svg-icons';
  


export default function DoctorSection({isHome}) {
    const filtered = isHome ? doctors.slice(0, 6) : doctors;
  return (
  
    <div className="container mx-auto">

      <div className="container mx-auto flex justify-between my-6">
        <h1 className="text-xl font-bold ">Our Specialist Doctors </h1>
        {
            isHome ? (
            <Link href={'\doctors'}>
            <Button>
                See All
            </Button>
            </Link>
            ):(
        <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Specialist" />
  </SelectTrigger>
  <SelectContent>
    {
      categories.map((category)=>(

        <SelectItem key={category} value={category}>{category} </SelectItem>
      ))
    }

  </SelectContent>
</Select>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

        {
            filtered.map((doctor)=>(
                <Card key={doctor.id}>
                    <CardHeader>
                        <CardTitle>{doctor.name}</CardTitle>
                        <CardDescription>{doctor.category}</CardDescription>
                    </CardHeader>
                    {
                      !isHome && (
                    <CardContent>
                      <div className="flex justify-between my-2">
                        <div className="flex gap-2 items-center  ">
                        <FontAwesomeIcon icon={faPerson} fade width={15} height={20} />
                        <h1 className="font-semibold">Gender</h1>
                        </div>
                        <h1>{doctor.gender}</h1>
                      </div>
                      <div className="flex justify-between my-2">
                      <div className="flex gap-2 items-center  ">
                        <FontAwesomeIcon icon={faHospital} width={15} height={20} />
                        <h1 className="font-semibold">Hospital</h1>
                        </div>
                        <h1>{doctor.hospital}</h1>
                      </div>
                      <div className="flex justify-between my-2">
                      <div className="flex gap-2 items-center  ">
                      <FontAwesomeIcon icon={faCalendarCheck} width={15} height={20} />
                        <h1 className="font-semibold">Appointment</h1>
                        </div>
                        <h1>{doctor.appointmentTime}</h1>
                      </div>
                    </CardContent>
                    )}

                    <CardFooter>
                      <Link href={`/doctors/${doctor.id}`}>
                      <Button>See Detail</Button>
                      </Link>
                    </CardFooter>
                </Card>
            ))
        }
      </div>


    </div>

      

    
  );
}
