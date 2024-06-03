package com.aliyun.ros.cdk.cloudsso;

/**
 * Properties for defining a <code>RosDirectory</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-directory
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:50.220Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudsso.$Module.class, fqn = "@alicloud/ros-cdk-cloudsso.RosDirectoryProps")
@software.amazon.jsii.Jsii.Proxy(RosDirectoryProps.Jsii$Proxy.class)
public interface RosDirectoryProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDirectoryName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDirectoryProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDirectoryProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDirectoryProps> {
        java.lang.Object directoryName;

        /**
         * Sets the value of {@link RosDirectoryProps#getDirectoryName}
         * @param directoryName the value to be set.
         * @return {@code this}
         */
        public Builder directoryName(java.lang.String directoryName) {
            this.directoryName = directoryName;
            return this;
        }

        /**
         * Sets the value of {@link RosDirectoryProps#getDirectoryName}
         * @param directoryName the value to be set.
         * @return {@code this}
         */
        public Builder directoryName(com.aliyun.ros.cdk.core.IResolvable directoryName) {
            this.directoryName = directoryName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDirectoryProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDirectoryProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDirectoryProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDirectoryProps {
        private final java.lang.Object directoryName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.directoryName = software.amazon.jsii.Kernel.get(this, "directoryName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.directoryName = builder.directoryName;
        }

        @Override
        public final java.lang.Object getDirectoryName() {
            return this.directoryName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getDirectoryName() != null) {
                data.set("directoryName", om.valueToTree(this.getDirectoryName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudsso.RosDirectoryProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDirectoryProps.Jsii$Proxy that = (RosDirectoryProps.Jsii$Proxy) o;

            return this.directoryName != null ? this.directoryName.equals(that.directoryName) : that.directoryName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.directoryName != null ? this.directoryName.hashCode() : 0;
            return result;
        }
    }
}
