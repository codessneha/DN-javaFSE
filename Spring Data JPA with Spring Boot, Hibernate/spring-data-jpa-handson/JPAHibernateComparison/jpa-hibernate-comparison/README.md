# JPA vs Hibernate vs Spring Data JPA

## JPA
- Specification
- No implementation

## Hibernate
- Implements JPA
- Requires Session and Transaction management

Example:

Session
↓

Transaction
↓

save()

↓

commit()

↓

close()

## Spring Data JPA
- Uses Hibernate internally
- Reduces boilerplate code

Example:

employeeRepository.save(employee);
