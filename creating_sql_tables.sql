

-- create database school;
-- use school;

create table admin (
	id int not null auto_increment,
    f_name varchar(255) not null,
    l_name varchar(255) not null,
    prefered_name varchar(255),
    email varchar(255) not null,
    primary key (id)
);

alter table admin
add password varchar(255) not null;


create table students (
	id int not null auto_increment,
    f_name varchar(255) not null,
    l_name varchar(255) not null,
    age int not null,
    password varchar(255) not null,
    admin_id int not null,
    primary key (id),
    foreign key (admin_id) references admin(id)
);

create table courses (
	id int not null auto_increment,
    name varchar(255) not null,
    admin_id int not null,
    primary key(id),
    foreign key(admin_id) references admin(id)
);

create table teachers (
	id int not null auto_increment,
    f_name varchar(255) not null,
    l_name varchar(255) not null,
    gender varchar(255) not null,
    password varchar(255) not null,
    admin_id int not null,
    primary key (id),
    foreign key (admin_id) references admin(id)
);

create table studentscourses(
	id int not null auto_increment,
    student_id int not null,
    course_id int not null,
    primary key(id) ,
    foreign key(student_id) references students(id),
    foreign key(course_id) references courses(id)
);

create table studentsteachers(
	id int not null auto_increment,
    teacher_id int not null,
    student_id int not null,
    primary key(id),
    foreign key(teacher_id) references teachers(id),
    foreign key(student_id) references students(id)
);














































