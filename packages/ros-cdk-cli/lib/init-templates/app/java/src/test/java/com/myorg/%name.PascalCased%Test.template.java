package com.myorg;

import com.aliyun.ros.core.*;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.junit.Test;

import java.io.IOException;

import static org.junit.Assert.assertEquals;

public class TestJavaTest {
    private final static ObjectMapper JSON =
        new ObjectMapper().configure(SerializationFeature.INDENT_OUTPUT, true);

    @Test
    public void testStack() throws IOException {
        App app = new App();
        TestJavaStack stack = new TestJavaStack(app, "test");

        // synthesize the stack to a ROS template and compare against
        // a checked-in JSON file.
        JsonNode actual = JSON.valueToTree(app.synth().getStackArtifact(stack.getArtifactId()).getTemplate());
        ObjectNode expected = new ObjectMapper().createObjectNode();
        expected.put("ROSTemplateFormatVersion", "2015-09-01");
        assertEquals(expected, actual);
    }
}
