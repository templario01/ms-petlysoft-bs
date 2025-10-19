import { Module } from "@nestjs/common";
import { GetVeterinaryCenterUseCase } from "./use-cases/get-veterinary-center.ise-case";
import { PersistenceModule } from "../repositories/persistence.module";
import { VeterinaryCenterResolver } from "./resolvers/veterinary-center.resolver";

@Module({
    imports: [PersistenceModule],
    providers: [GetVeterinaryCenterUseCase, VeterinaryCenterResolver],
})
export class VeterinaryCenterModule {}