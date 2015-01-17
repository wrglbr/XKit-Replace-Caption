    //* TITLE Replace Caption **//
    //* VERSION 1.01 REV A **//
    //* DESCRIPTION Replace post caption with boilerplate text/html. **//
    //* DEVELOPER Phil Groshens **//
    //* FRAME false **//
    //* BETA false **//

    XKit.extensions.replace_caption = new Object({

        running: false,
	button_icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAeb0lEQVR42u2dB3gTxxLHR9VN7pUOpji0BxhCCZ2EQCAkhDwe8EIKnVADBDDF9BZ6DyWUPAjNtJgSCM1UAwYMNtVgcO+9yar3dk4StrHKyVZz0P/71rKkk3R389vZ2b3dORZY9V6LZe4dsMq8sgLwnssKwHsuKwDvuYwGwM7jj3hyOdWezWZ1pSh5CxaLXZ881uOw2fYcDofHIjL3wRtalTkiikgqlUmlUokoKyMlLSUxJi7uzYsXyfGv7yXFR9/j29olk43yeHwb0bOIO3KD7bMhTwAxOhso+JTFZg1ls1j9yaOD8XfOwBwZAcvKfqVEIhaF37ny4FbI6YuPwq5e5HJ5cXb2ggw2hyPMzkyVmf1wtx97xCVfNJTU7gBidL9335fJ5FBQJIG8IjGIRFKQkOcyGWWIn/7HiMthA5fLBls+B5wc+OBICvGeb99X/ZeelpR65uhvwTcungyWSsXRPJ5NCjnn+WJRsbQiv1tpAH4NetiV7PwWsrNNS7+enSeChNR8SM0qgsxcIfFe5jy9VU/YnLg724G3uz3U8nYEVyfbkvdISU2OS963benvTx7evEKeviFNbBppVfPlcplezUOFAdgW9BD3aD2PxxlNjEt/j0wuhzeJufAqPgdyC8TmPof/KDkLbKBhbReoV8MZOErPwAIWdfNK8M192xb/JhYJn5OX4gkEWSScKGb6vRUCgNR6X1Ljj5N2vgVdsQkBr4nhn7zOhGJRpZokq3TIzoYLTeu7gy8BAeNoNGBy4pvETcsmbUpNirlHnr4hJZ2UQlJ0egO9Adh6JLwFl8s5R2zug89zC0Rw72kqcfmMobPKAHIjTcKHTb1pz4AqzM/JW7fox42x0U9CydNoUlJJySdFa43UC4Ath8Nb8LjsEDkFLvgc3f2jqHTi+q0NvDmETUFLPy/aG6AkYqFw5dzha5UQvCYlhZQ80AIBYwA2H3rgS2r+TdK++KC5I4jhoxNyzX0OrCJqUMsFWjTypAPHovzcvBWzv1tFmoP7oIBAqydgBMCmgw9s2RzWbdLitCAA0C4/Ia3A3MdtVSnV9BaQJsEHSFwGxPiJS6cPXq4MDGNAERMgBOVcNSMANh54sI30UcfIifHR5cck5Zn7eK1So3rVnegmAccPQkNO3fp989wd5OVXpMSRkklK0buf0QnAuv33utrwuVdIO8+KJt07jPStslw1Iz2EBrVcMT6g1i8eu/l5ROhVUDQFiaTkkFKmf64VgPV/3OOy2eyHZKOmWSTKv/koyTqgY+HCOKBTyxrg7mwLGakJKYumDlgsk0rQC6i6h+i+33YPtQJAav/3PB5nr1gig6v3E6CoYqONVplY9rZc6N6mFhDbwYEdSw7evHj0NCiagnhQeAGhaluNABDjs0ng94TU+A+iYrPhZVyOuY/LKj3UqLYr+NV1heyMpLQFk79YSMnlODag8gLYfaO9gEYA1vzvbi8ej3uuSCiFK/fjQW7t61cpYSDY48Na4GDHg20rf9rx+P7Vy6AYIEoAhRegR+40A7AvbB9p/4c+I0HfG2vUXyWFA0RNfN0g/M7F+3s3zNwOimYgFhQ9AjQqpRaAVb/f5XE57GyJjHK4EhYHUuul2yopLocFH7etA2yQimaM6DJLKhGrgkEcIcRmQKIWgBW7QzvZ2PCux6cWQOTLDHMfh1WVUItGHvTl5E1Lxm559TTsOii6hKpmQKgegD235/C43CX3n6VCerZQn9+zysLk6WpHjxCeP77j3Llj24NA0QzEkJJNSr5aAJbtunWEy+EOvHwv3jpzp4pL0QzUhifh1x7uWTdtGygCQYwD0LXnqQVg+e7b9wuEUv+7j1PMvf9WGUDtm/tAcW5S4qpZ/1kBiiYgBhQXidQDsPS3m9mpWSKXZ2+yzL3vVhlATX3dwdOZUzhndJc5oAgCY0AZCKr3ALtCi6MT82xik/PNve8mkQ2fAzW9BODj4QAOtjyws+XS19px5FMoktJxEM5vzCusmtPc6lZzgvo1HcUBwzsEgML4WJJJydEQBN6RP47OZKVmFjH/lSokgR2PDoxa+nnS19GrEcMzWaaQky+CyFcZ8PBFGtx9kgJV5fz4uNtD8wYe1Iwf2k6HEgCSQBMAy/fcoXDCR0bOP2uaF06h6tWhLmkTqwGfx6nUd+G8iMcEhgt34uDy3TgQSw22VsPg8nCxg1YEdgLADCgBALuC6puAZbvvUOHP02jiq7rwALv414TBvf2IG3Qxym9k5RbD0UtRcOraaxCJLW9SrKuTDfh/4A0Bw8oAQF8eVh8E7rpNPXyRXuUBqF/TGSYObgVNSBBkCuEaiK1HHkJoRLK5D72MXBwRAC+YNbwdMwCW/KYAAGf8VkXhhZDv+jaBQb0akWCObfLfv/4gAdb+8QAKhRJznwpaCEArPy+YPYIhAIt3hlI49asqLu5wd7GFOcPbQbMGHmbdj5SMQlKR7kBUXLa5Twm4CGzogHfOyPYzoaQbqBmARTtCqYiXVQ+A2j6OsGxiJ/BytTf3rtAqJl1IhAB7DOYUrh3A3k7gKIYALNh+i8LuTl4VAsCvjissndCJXlhpSZLK5LBybxiE3E8w2z44C/jwr4aeMG80PQ7wRlk0AzB/2y0KuzhVZeCjFqn5a6d2fbtKxtKEEMz79Sbce5pmlt9HAJoTAOaP7jALSgCgrwiqBYDsLPUkOrNKAIBdnE0zeoCXW8XdPvbpcZ0DTnfHtruoWAI4Bd7WhguepA+NgGEXEpdwV1RCkQSmrr4E0YmFJj9HTggAiYkWjPlIBUAMKOcHqgUgcOtN6ulrywcAF0GsmNSJnguvr3B28+PoDLh4JxZuR6boXNuI6/bxd3q0rQUdW9QAHld/GBJTc2HM4rMglpu2mcJmsVl9D1j440ezocQDaAZgzpYbFF4IyrdwAL7t25iUJnp/Dody9wQ/gYpe7MJr7EN6fwCfdaz3dqk2U1289RyW7AwFvp2Tyc4TAoArihf92JEhAJuVABRZLgAY8f86+xO9aiL2yzcdCofLYfEG2Qdckzfzhw+hTjX9jDl1WRA8eFlIIHA0ybnCbCM4GLZkHEMAZm+6Tj2PQQAsYyBDnVb91IXu2jBVXEoeadpuQXKGYdtgvJI4/bs29HAzUyWm5sDgSTuA4+AFfFvjQ4AANK7nBkvHd2IGwCwCwAsLBqBNE29YRrp8TPUyLhsCNt0wWpOGFxInDWkFfTv5Mv7Mml0X4PDpu2DvWsPoEDja8xQATOismg+Ak0I0AxCwkQAQm0UndrJErZvWlbRpzEb6Ekl0/9PqEKMPayMEc0a0Y+wJUjPzYcDYLSCRysCBQMAzIgQIwAd13WDZxHIAqL8aOHPDNQqHMC0RACR5w/TujLbFJW2TVl6h09eYQthT2BzQg8QnzGKCBRtOwdmQCPp/Y0KAAPgRAJZP7DwXmHiAGeuvUeg2CyzkYkZpTUZX25mZq911MhIO/x1l0v3DEUkElM2gdxAWEQvj5+9XPmMpIRAYfJ8EBIBGddzgl0mdA0FhfO0A/LzuKoWZvizlapZKGPEfXtGXHJDufnRCWj6MXnzBLItapnzjT3cRdQmX230xejOkZapWXhkHAgSgYW1XWDm5CwKAHgBnBmsGYNraq1R0guUB0JJE/StJ9M9Ea/bdg/OhsWbZTx93B9iz4FPgMBg5XLLlLARfDC/1iuEhwClwDQgApOc0D8p6gGy1AExdE0Jhu2lpAAz7oik9AKNLGO0PmnUGpGacprVgTAf4qEV1ndudu/YE5q07+c6rBAI3AoGNYSDABaI4ZrF6SlcEoLQHUA/AlNUhFGYAKyy2LADWTO1Kj2nr0pkbb2DDgQdm3dcu/jVg7sj2OrdLyciHL0ZtVPOO4SBAAPBaBjl/zACYvOoKFZOUa3EJIYJWfs7oit/inbfheniiWfcVI++glf10BoN4Iarbf1eDsFjdGAVCUJNAUKmc2zQAuFJ47bRu80Hh/rUDQLpOVGyyZQGAo1nHVvVjtO3ggDOQZQGJK3cG9mQ0TPzttN3w4rWmeYSVh8DelkenmF3/81sAsGDiKPUATFx5mYpLzrMoAPAAts/5ROd2GLd8NS3Y3LtLK3BUe+jcqobO7aYuPQI37r3UskXlIMCUMXWrO2P3dAGUeADNAExYQQBIyaNXxViK8GrWumnddG4XS8AdRbp/lqBxA1tA/+4NdG4XuC4Yzl+L1LFVxSFAAOpUc4aNMxgCMH75JSo+Nd+iAPiwiTc95UuX8CIWjv5Zgpj2Wpb9eg5O/n1f9xeysIuoPwQIAI5ObprZYyEoAFDlDlQPwDgCQIKFAdC6sRcOZercDpNZjV9xydy7S2vkV83gPz39dG63eMtZOFVmLECLCAQC11rAtWE+AwozjCMAmwMYAjB22UUKL6IUWxAAeD2bBDE6t0tKL4Af5p839+7SYjpsPWvVCbh06ynzL0YI3AgEfGYQIAA1vR1h66yPmQEwZulFCk+kJQFQ3dMB9i7srXM7HPzp99NJi8hgvmJiJ/Bv7K1zuwkLDsLdR6/1+3I9IEAAangJcAINMwBGL7lAJSMAFrTODSdknt7Qn9FFFgwCMRg0tw4t7wtuzrY6txsw7ldISK7A9DSGEODk1hqeAtg255NFoAgAVVlC1F8LICeQSsmwLABQu+d/SrsyXdp8KByCr+lZowwszN69e34vndvhJesug3+peB5GFptAUFMrBLY2HOJBBaQb3XMxKIyv3QOMXPQ3lZJZaHErXXH+Hea70SVMZz978w2z7uvAno1g1FfNdW734nUqfDvtt8r9GA0BegI7tW/jPIVqHgLYEUgDoGoC0AOoB2DEwvMUrnS1NAA++6guTBnaWud22P5/O/cvyMgxX4azHXM/oQdfdOlA8F1Yv8cA4xZaIEAAMPvJzsBPmQEwfMF5Kg0BkFgWAJgB+8CyPoyyeRy7FAXbj+kaXDGOMBHF0vHM5izqHgXUQxogwImr3u4OsGvep0ugLABZas/ksPnnKMyLY2kAoHAJGJOVv8ViKWnKLgCCbEphjLppZg96AoYuFRSJoPew9SAWG7C3pQYCGgA3e9g1v9dSKIkBNAPwwzwCAHGfYgsEAFO8TPtWdzOACo1IgvnbQk26f/2714dxA1sy2vbkhYewbOsZw+/EOxDY8Dj00rndCxgC8H3gX1RGLgJgeXlv8GD2L/2M8ULQzYcfQvDVaJPsm29NZ9g4vTuj/EO4NG1EwO/wOMo4q4ZZBAIHdwIBz44+Z7iaac/C3stAYXztAHw39y8Kb/dqqYmPhvZpDN99zmxJGK7Mnf/rLQh7mmrUfcITvO7nboxzE4RFxsL4efsZbVtRKSCoDfb2DvQi172LaACwNmDQoRmAoXPOUng9XWKhAODI1t6FvcrcT1ebMB5YstN4iRowDRtep8DRNqb6cd4fcD8yxujnCiFw86kH3h4u8Pviz1QAqPIFqwfgGwJAtgUDgMJZtzj7lqnQE+w8Hgknrrwy6H78q6EHzB7ejtGIn0ohd6Jgxoogk50rPp8Htes1hIO/DFgOJU1ADGgC4L+zz1CYIcySAcAdX81wjmBpoRfYQuKCyq4RRC/0TZ8P4OuPG+qViEpYLIFBk7ZDSrrpbrqJCaOdnezg3J6pDAGYRQAosGwAcFn23JHtoGNL3TNu3hX2bs7dioGgi1F6Z/vEa+t9iPf59yeN9Kr1Kq3Ydg6On2dw7d+AQgBwSt3f/5vODIAhAacpTBAl0e9W9CYTGj9gWFvo2pr5ilx1kiuzfd6OTIaIlxn0BaR3Rz/xt6p5OkBTXw96USpmGcV+dUV04eYzmLP6uMnPFwKAi0Mu7JuB2cLR+BgExoAmAAbNPE1hdhCpBQJgKOOrE87Qzc4TKVLEyCmwJbXd1dG2QtlA3tXz1ykwdu4+KBKaPucCRwnARQUAql5ADCmZGgA4pQTA/NfUyxyIEY1vTMUnZ8PIWb9Ddq7p8wOhEACcGn5p/4xfoKwHUA/Af2acojA7iCUBUFWN/yYhEyYtPAipGea703opAFaCAgBcMRsDmgAYOCOYwqXhlgJAVTV+ZFQSTF1yCHLzzXvfJTx/DnYcuPRHADMA/v3zn1SBUGoR06qqovExljh67gF9mVdiAddTcI2qvS0HLh+YxQyAAT+fpIqEMrMDUFHjowH2/3kXPvKvD/VrmzZncHpWAazaeR5Cbj836e9qEwJgZ8OBKweZAjDtBFVUjACYc6crbvx1ey7BoVN3gMvlwJB+7eCHrzuQfrD+fXZ9hKlejp0Lh+0HQ6CwyLKyrOM4FU4Lu1oCAAaBuEhUPQBfTT1BCUXmA8AQxi8tJ4EdDPq8LXzd2x/cnA2bSFoklkLwpUew70SoSUf39BENAJ8NVw/NXgVlPUCGWgD6TzlOCcVy0hc2/c4a2vilxedxoWs7P+jdpRm0bVEXbPjcCu0jjhFEvkiEsyGRcPHmU8gvNP9CVG3CSSo2fBZcOzyHGQBf/nSMKhZTYOoQwJjGf1c2fB74N60DzfxqgJ+vN9Su7g7eHo6kreSV2Q4Hw9IyCyA2MQNiSJcu/GkcPHgcC3kFVeeOqjQAPALAEQsGwJTG1yYEw86WT887LBQWG3a6lpmEUyjR2d0ImrsaSgDAGEADAJMJABLTAWApxv+nqhQAa6AEAJwcqh6ALyYfpUQSMAkAVuMbX6UAWAsKAF6AJQBgNb5pxGJRSgACmQIQpARAv1To+shqfNNJfwAmEQCkxgPAanzTigaAQ8GNo/PWgWIQSBcARwgALKMBEDDsQ+jxoe41fqVlNX7FpQEAzb2AfpMOU2Ip2ygAfN7FFyYNbqXXZ6zGr5xYQAGPI4ebx+YzBGAiAUBmHABwOjcuVWYqq/Err1IArAcmTUC/iYcIAByDA4D3rjnKMNcfymp8w0gBgIwAsIAhABOUAIBhAcD712H2TCayGt9wQgC4BIBbTAH4fMJBGgAKDH/j5f8t6k2vVdcmq/ENq1IAbAAFADhZQQsA4w9QYjnXKABg4kRMoKhJVuMbXqQ/B1w2AeD4QgQAxwEQAJwdrB6AvgQAiZEAwGHJWcPaQrc2tcq9J5PLYe2uixB0Nszc5+wfJQSAw5ZC6PFFmJZc5QG0ADDuD0pCIQAVWwChWxT08PeCL7o1hAZ1vOiVOuFP4mDv8VsQ+dww9/SzqkQ0ACwJhJ5YzAyAPj/uk0uBzzIeAApXX5idAFKReebKv09igYz4cgl1++SSTVASBCIA6WoB6DV6twg49nzSchh1xyhKTiBItEJgZLFACiy5WHIneNmvUDYGUA9Az+Hb8tl8J4GcZfybHFshML5YIAFKKhSGnV65E5h4gE4Dl8YJ3GvXkrHs9PmdCstcEPh4OoGnmyMkp+dCRlYB489h1tL6tT2BzWZDdFyaXrmUXJ3toaaPK2TnFkFCSrZJjpNNiUCYl5oecWXHH6AAQDUhRD0ALXtOCPXxbdNexnJQhO0mkCkhqFXdDeaO7wstG9emDw/jkdDw17B0yxlIz8rX+tn+PVvBuKHdwMVJMbsYp4DvDroB+07e1vo5Z0c7CBj7GXRv/8HbdLfPXiXD0q1nIOqNMdPXUMT9CyE7JerVy7tH8e5UpaeFqw8C6/t/sb9hmwHfyNi2BADjxgFldhUhyCKBodh4qd08XAWwb+0IcHcpfz0iITkbvvt5F52+TZ0GftYapo9Wn7B615HrsP3gNbXv8bgc2P3LD+Dn61PuvYLCYvh++h6Ir0iuYCaiSPtPiSHxxfU7pFyGkvwAmCpWPQCuPo2mt+0XsJJi8YDimKYZeLu/RoZg+qheMLBPG43vbztwla7R78rWhgdnd08Ggb367GS4MOTL0ZshI7t8UzKglz9d+zXpwo2nMGfNCaMcL8iLCQAyeB564GReRizepxZrPwKQBJoWhtg7+3zcYcD8sxyuDZ/iOJqsGVDJmBAEbR4LdWq4a3wfp32PmbOv3OttmteFrYu+0frdc9eegL+vl8/7v3Lmv6Fbe803jsAp5p98u9bgx4q56FiyQpDLpZL759btoeQyzAymuhSM7Y76BBH2Tl4N6vt/edKnQbumgM0Ax7jLqtTvu3Eg+HPHBKjmqTmH75OXSTBsxp5yr+M6w/WBg7V+96JNp+D05Yhyr6+bOwg6ttZ876BikQS6DF5p6FNIar+YFBFkJT2Lin4Q/Bco3L4qQUQmaMoVbO/s7Wzn6LnKv9fkUYDDwTwnk3sBlDEgWDHja+jRQfN9fIL+ugerdpS/44i7iwOc3jVJa0KoIZN3kF5BernXRw/uAiMHab7dzYMncXT2EAOfPKBI7cfHl/eOnclNfYVkxoACAnzEHVV/vwA7Jy+OMD99yEcDFm0gMLgBiQNYXNPGAiXHIYcCAoHMQBA0rl8Ndq34nl44+q7w5o3fTPlNY/cM23Fsz9Up5PYLmPHLUbXvYdfv8MYxb3sOpYXLzCYtwjuGvDHseZMV0x5AVJiTHRmyM4i8gilJse3HsXZs//EgszVXaxarVbUGHRY16fT95ziUwOI7A4ttvKFhrQcjJxBkxxMIDLMcCz0AdgMFpVYMZ+UWQuDakxAWEaPxc5gCNnDC5/Bp56ZlMpbfvP+KtP8nta4KbtKwOqyYPgB8SjU/mDJuzW/n6cWlBj1fJOijJIpgNDbyfEhGfATeRxdvpYqUIQRo/BxSCjQCwOby3SmZbGi7/oGBJCh0Z7G5CgjM0BTQB2VgCJwEttC5TUPwdHeEpLRcuBH2EoqKmSVwalTPG1o3q0M3B4+ex9MLRZkIF6NiLIDjEJgv6EbYKxo8g54n4vLlaHzS/RMVZmc9vb73OPGiWOsxAMTbk9LdP1LwnjpizQBweFy5TNLRxafRmFa9fhpMJx0lzQCbb9h72+t1cAhBFoFAUnUWZppacmkRcf8iBIF6FXbsdH5mLI76YY5cHPmj8wOTkqt81DnnC7Mw9vPr8N/x1Rp2aoYvcPiOwOaZJx5AWSHQLLm0mAYAlZnw5Fnc4/NXQeH60fAY9MWAwvCFyqILAJYNOeX+xBv09e8zfYzApboHfoRj42RmCGRKCCx7Xb4pJSe1XiZWtPvFBZmZUbcPBMtlUgz2sL+PASC2/7nKgu0/nf2BSYOON77rZCvw6N2q95QhfFsnekIfQsDhV+625pWRFYISoTeUSRSxBOkyF726e+SUqCgHjY61/rXyEZsB7Puji3gbeDABAC8GNCTlIwfXGj1a9Jz0NYdnR4+Hcnj2wLU1Z2D4fkOAAR/WerlMcfwyqVgUHXbsjDA/DY2fBsobQ4Gi9uNVLnQRWPvfLvtlajknUnAssx2BoGOz7mP78ZSegE16Bzw7V+w1mOckvKcQkAAdpKJ8cvyKBBZSsbDoTfif54nxsc1H4yMEaGw0Pho+W/lYpq+qT9X1JAWH0PxtBe6tGnce0dfepZqH6mvwxoUECsDuoqn1PkGAxyoVF5YJgkWFWZkxEWcuiYtysL3HLh62/RjsYZcvX/k/fqDclSp9AMBRIIwHsDloTgJDv3r+X/Xw9m3XWDVOjH85pJvIsxGY3CPIyYkp/AdDQNd4SZHy+JQenAIqO/nZi+QXV+/I5VI0Mtb4ROUjegDs6+PrIuVr5aRv440ZlBCCuqDwBg2cvBo08fUf0NHOycut9IYIAHoFDteW/G9jkjhBAUEcOUmWlaevIqIHdIjR6eieGF3l6lUiQV52UtS1UAI9GhyDO6zpaHSs5fFQ4vbxZGDkrzbnW0WsghBgc4CL++uTUpfFYlf3qNO6eY3G3f9lK/Asf8M8YnyMFYjXoIeT8T429E8bgQl0kTizSC41fVr2Suw1bXD6UY7p+aTlDK6SWJibkxEbHpGT8jyaouRYw3OUBUf5MMJHCNDdo/HxJGg0PqqiJsCGHi+qIwi40B9hqE6+zt3Fp1EDj9r+9V1rNK3D5vDNEhkiBEV5qVUMAs0ink2Sn/EmLjc1KrogM5bUeAprOxoWDY7dO6zt6Oox+MM2gh7mVT5qzfZYmTqI1RivbGCN9yKlmvIRiwup6QKBW+0aTp6+PvbO1VxtBB5ONvauDmwOl0sCRS7LyG0CDUFuCu1Gq4Io2gVQMrLfUnFxXqFEmJdXXJCRVZiTlCrMS0knr6v676pHdPt5yv8RAjR8gfJ91f86ZQgj4DVOBAG7iugVsGfgpnyOBS8eoCfApgM9h9L/G6MBqPLCdkCuLNgGIL1Yk7EdV0XxWPPRwGj4DOUjvp+v/IzqOSMZygjYQ8BxAYHyEQ3vrHyOBceN+crChhIIrCovFQQ41xwNiQCg8aVQFgJ8HUHAGi8p9b9eud0MbQSs4XalCo4Y2pb6HwFAWKwAaFdpLyCGEghkUOIRiqEEEiHoaOs1yVhGwO9VGVxV0PDWJoC50KAqb4AgoLElyuf4qPIOlZKpjICG50DZ2m+FQLuoUkXVJKhAMJj+DxniJesRpLpsAAAAAElFTkSuQmCC",


        preferences: {
            "caption": {
                text: "Replacement Caption",
                value: "",
                default: "",
                type: "text"
            }
        },


        run: function () {

            this.running = true;
            XKit.interface.post_window.create_control_button("xkit-replace-caption-window", this.button_icon, "Replace Caption!");
            XKit.interface.create_control_button("xkit-replace-caption", this.button_icon, "Replace Caption", "", this.button_ok_icon);
	    


            XKit.interface.post_window_listener.add("replace_caption", XKit.extensions.replace_caption.post_window);
            XKit.post_listener.add("replace_caption", XKit.extensions.replace_caption.do_posts);
            this.do_posts();


            // Store something?
            var m_caption = XKit.extensions.replace_caption.preferences.caption.value;
	    var m_caption_escaped = escape(m_caption);
            XKit.storage.set("replace_caption","caption",m_caption_escaped);

        },

	load_caption_prefs: function() {

		var caption_prefs = XKit.storage.get("replace_caption","caption");
		try {
			var caption_pref_escape = unescape(caption_prefs);
		} catch (e) {
			var caption_pref_escape = "";
		}

		return caption_pref_escape;		
	
	},

        post_window: function () {

	    var origin = XKit.interface.post_window.origin();
            if (origin.is_reblog === true) {
            	var m_sentence = XKit.extensions.replace_caption.load_caption_prefs();
            	$("#post_two").val(m_sentence);
            	setTimeout(function () {
                	function set_post() {
                    		try {
                        		var post_two = (tinyMCE && tinyMCE.get('post_two')) ? tinyMCE.get('post_two').setContent(add_tag) : ($('post_two') ? $('post_two').value : add_tag);
                        
                        		$(post_two).value = add_tag;
                    		} catch (e) {
                        console.log("OCR ERROR --> " + e.message);
                    }
                }
                var mx_sentence = XKit.tools.replace_all(m_sentence, "\\\n", "");
                mx_sentence = XKit.tools.replace_all(m_sentence, "\\\r", "");
		
                mx_sentence = XKit.tools.replace_all(m_sentence, "'", "");
		mx_sentence = XKit.tools.replace_all(m_sentence, "&#34;", "");
                mx_sentence = XKit.tools.replace_all(m_sentence, "\"", "&#34;");
                XKit.tools.add_function(set_post, true, m_sentence);

            }, 400);

}


        },

        do_posts: function () {

            // get posts:
            var posts = XKit.interface.get_posts("xkit-replace-caption-done", true, true);

            $(posts).each(function () {

                $(this).addClass("xkit-replace-caption-done");


                XKit.interface.add_control_button(this, "xkit-replace-caption", "");

            });

        },

	

        destroy: function () {

      
		XKit.post_listener.remove("replace_caption");
            this.running = false;



        },


	cpanel: function(m_div) {
		
    	var caption_pref = XKit.extensions.replace_caption.load_caption_prefs();
	$(m_div).val(caption_pref);
	 
	}

    });
