package oslomet.jqeryoblig2;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class bilettController {

    public List<Bilett> alleBilett=new ArrayList<>();
    @PostMapping("/lagreBilett")
    public void LagreBilett(Bilett bilett)
    {
      alleBilett.add(bilett);
    }

    @GetMapping("/hentAlleBiletter")
        public List<Bilett> HentAlleBiletter()
    {
        return alleBilett;
    }
    @GetMapping("/slettBilettene")
    public void SlettBilettene(){
        alleBilett.clear();
    }

}
