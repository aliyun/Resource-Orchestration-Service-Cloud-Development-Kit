package com.aliyun.ros.cdk.nas.datasource;

/**
 * Properties for defining a <code>RosFileSystem</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-filesystem
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:34.017Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.datasource.RosFileSystemProps")
@software.amazon.jsii.Jsii.Proxy(RosFileSystemProps.Jsii$Proxy.class)
public interface RosFileSystemProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFileSystemId();

    /**
     * @return a {@link Builder} of {@link RosFileSystemProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosFileSystemProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosFileSystemProps> {
        java.lang.Object fileSystemId;

        /**
         * Sets the value of {@link RosFileSystemProps#getFileSystemId}
         * @param fileSystemId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder fileSystemId(java.lang.String fileSystemId) {
            this.fileSystemId = fileSystemId;
            return this;
        }

        /**
         * Sets the value of {@link RosFileSystemProps#getFileSystemId}
         * @param fileSystemId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder fileSystemId(com.aliyun.ros.cdk.core.IResolvable fileSystemId) {
            this.fileSystemId = fileSystemId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosFileSystemProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosFileSystemProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosFileSystemProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosFileSystemProps {
        private final java.lang.Object fileSystemId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.fileSystemId = software.amazon.jsii.Kernel.get(this, "fileSystemId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.fileSystemId = java.util.Objects.requireNonNull(builder.fileSystemId, "fileSystemId is required");
        }

        @Override
        public final java.lang.Object getFileSystemId() {
            return this.fileSystemId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("fileSystemId", om.valueToTree(this.getFileSystemId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nas.datasource.RosFileSystemProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosFileSystemProps.Jsii$Proxy that = (RosFileSystemProps.Jsii$Proxy) o;

            return this.fileSystemId.equals(that.fileSystemId);
        }

        @Override
        public final int hashCode() {
            int result = this.fileSystemId.hashCode();
            return result;
        }
    }
}
