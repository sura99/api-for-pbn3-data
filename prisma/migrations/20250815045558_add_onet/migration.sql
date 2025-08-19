-- CreateTable
CREATE TABLE "public"."onets" (
    "id" SERIAL NOT NULL,
    "smis_code" INTEGER NOT NULL,
    "obec_code" INTEGER NOT NULL,
    "year_test" TEXT NOT NULL,
    "score_math" TEXT NOT NULL,
    "score_eng" TEXT NOT NULL,
    "score_th" TEXT NOT NULL,
    "score_sci" TEXT NOT NULL,
    "score_total" TEXT NOT NULL,

    CONSTRAINT "onets_pkey" PRIMARY KEY ("id")
);
