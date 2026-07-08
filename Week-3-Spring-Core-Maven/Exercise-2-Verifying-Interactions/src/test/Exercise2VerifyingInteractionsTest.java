package com.cognizant;

import org.junit.Test;
import org.mockito.Mockito;
import static org.mockito.Mockito.verify;

public class Exercise2VerifyingInteractionsTest {

    @Test
    public void testVerifyInteraction() {
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        MyService service = new MyService(mockApi);

        service.fetchData();

        verify(mockApi).getData();
    }
}