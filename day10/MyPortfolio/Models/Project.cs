using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace MyPortfolio.Models
{
    public class Project
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        [DisplayName("프로젝트명")]
        public string ProjectName { get; set; }

        [Required]
        [MaxLength(400)]
        [DisplayName("프로젝트설명")]
        public string Description { get; set; }

        // 300X500 or 600 이미지      
        public string? FilePath { get; set; }

        // 이전파일 - 나중에 Project.cs를 Add-Migration으로 수정해도 별 문제X

    }
}
