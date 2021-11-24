## Define Property Type
2021.11.24

[php official document](https://www.php.net/manual/en/migration74.new-features.php)

### before php 7.4.x
```
class Sample
{
    /**
     * @var SampleRepository
     */
    private $sampleRepository;
}
```

### after php 7.4.x
```
class Sample
{
    private SampleRepository $sampleRepository;
}
```
