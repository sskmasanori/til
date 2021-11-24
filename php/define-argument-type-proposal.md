## Define Argument Type Proposal
2021.11.17


### Bad Sample
```
public function sampleMethod(int $teacherId, string $date): Collection
{
    return $this
        ->model
        ->where('teacher_id', $teacherId)
        ->***
}
```

<br />
<br />

## About 1st argument `int $teacherId`
Sample code has possibility to get number which is not teacherId as 1st argument.<br />
There is not `teacher_id = 1000`, but this method can get `1000`.
<br />
<br />

### Ideal Solution : make & use TeacherId class, but too much.
```
public function sampleMethod(TeacherId $teacherId, string $date): Collection
{
    return $this
        ->model
        ->where('teacher_id', $teacherId->getId())
        ->***
}
```

### Practical Solution : use Teacher model class.
```
public function sampleMethod(Teacher $teacher, string $date): Collection
{
    return $this
        ->model
        ->where('teacher_id', $teacher->teacher_id)
        ->***
}
```

<br />
<br />

## About 2nd argument `string $date`
We can not say that 2nd argument `string $date` always gets string like `2021-11-01`.

```
public function findMonthlySchedules(Teacher $teacher, Carbon $date): Collection
{
    return $this
        ->model
        ->where('teacher_id', $teacher->teacher_id)
        ->*** $date->toDateString() ***
}
```