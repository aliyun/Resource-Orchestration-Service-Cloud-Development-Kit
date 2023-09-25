package com.aliyun.ros.cdk.core;

/**
 * Options to configure TagManager behavior.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:23.184Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.TagManagerOptions")
@software.amazon.jsii.Jsii.Proxy(TagManagerOptions.Jsii$Proxy.class)
public interface TagManagerOptions extends software.amazon.jsii.JsiiSerializable {

    /**
     * The name of the property in ROS for these tags.
     * <p>
     * Normally this is <code>tags</code>, but Cognito UserPool uses UserPoolTags
     * <p>
     * Default: "tags"
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getTagPropertyName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link TagManagerOptions}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link TagManagerOptions}
     */
    public static final class Builder implements software.amazon.jsii.Builder<TagManagerOptions> {
        java.lang.String tagPropertyName;

        /**
         * Sets the value of {@link TagManagerOptions#getTagPropertyName}
         * @param tagPropertyName The name of the property in ROS for these tags.
         *                        Normally this is <code>tags</code>, but Cognito UserPool uses UserPoolTags
         * @return {@code this}
         */
        public Builder tagPropertyName(java.lang.String tagPropertyName) {
            this.tagPropertyName = tagPropertyName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link TagManagerOptions}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public TagManagerOptions build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link TagManagerOptions}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TagManagerOptions {
        private final java.lang.String tagPropertyName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.tagPropertyName = software.amazon.jsii.Kernel.get(this, "tagPropertyName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.tagPropertyName = builder.tagPropertyName;
        }

        @Override
        public final java.lang.String getTagPropertyName() {
            return this.tagPropertyName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getTagPropertyName() != null) {
                data.set("tagPropertyName", om.valueToTree(this.getTagPropertyName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.TagManagerOptions"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            TagManagerOptions.Jsii$Proxy that = (TagManagerOptions.Jsii$Proxy) o;

            return this.tagPropertyName != null ? this.tagPropertyName.equals(that.tagPropertyName) : that.tagPropertyName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.tagPropertyName != null ? this.tagPropertyName.hashCode() : 0;
            return result;
        }
    }
}
