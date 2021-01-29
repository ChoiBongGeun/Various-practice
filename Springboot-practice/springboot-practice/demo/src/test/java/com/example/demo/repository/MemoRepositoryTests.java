package com.example.demo.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.example.demo.entity.Memo;

import java.util.Optional;
import java.util.stream.IntStream;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

@SpringBootTest
public class MemoRepositoryTests {

    @Autowired
    MemoRepository memoRepository;

    @Test
    public void testInsertDummies(){
        IntStream.rangeClosed(1,100).forEach(i -> {
           Memo memo = Memo.builder().memoText("Sample"+i).build();
           memoRepository.save(memo);
        });
    }
    @Test
    public void testSelect(){

        Long mno = 100L;
        Optional<Memo> result = memoRepository.findById(mno);
        System.out.println("----");
        if(result.isPresent()) {
            Memo memo = result.get();
            System.out.println(memo);
        }
    }
    @Test
    public void testUpdate(){
        Memo memo = Memo.builder().mno(100L).memoText("update Text").build();
        System.out.println(memoRepository.save(memo));
    }
    @Test
    public void testDelete(){
        Long mno = 101L;
        memoRepository.deleteById(mno);
    }
    @Test
    public void testDelete2(){
        IntStream.rangeClosed(1,100).forEach(i -> {
            memoRepository.deleteById((long) i);
        });
    }
    @Test
    public void testPageDefault() {
        Pageable pageable = PageRequest.of(0,10);
        Page<Memo> result = memoRepository.findAll(pageable);
        System.out.println(result);
        System.out.println("total pages "+result.getTotalPages());
        System.out.println("Total Count "+result.getTotalElements());
        System.out.println("page Number "+result.getNumber());
        System.out.println("page size : "+result.getSize());
        System.out.println("has next page :"+result.hasNext());
        System.out.println("first page "+result.isFirst());
        System.out.println("");
        for (Memo memo : result.getContent()){
            System.out.println(memo);
        }
    }
    @Test
    public void testsort(){
        Sort sort1 = Sort.by("mno").descending();
        Pageable pageable = PageRequest.of(0,10,sort1);
        Page<Memo> result = memoRepository.findAll(pageable);
        result.get().forEach(memo -> {
            System.out.println(memo);
        });
    }
}
