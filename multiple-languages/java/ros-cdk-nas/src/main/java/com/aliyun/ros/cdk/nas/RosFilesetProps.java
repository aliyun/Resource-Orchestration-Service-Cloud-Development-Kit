package com.aliyun.ros.cdk.nas;

/**
 * Properties for defining a <code>RosFileset</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-fileset
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:40.925Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.RosFilesetProps")
@software.amazon.jsii.Jsii.Proxy(RosFilesetProps.Jsii$Proxy.class)
public interface RosFilesetProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFileSystemId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFileSystemPath();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosFilesetProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosFilesetProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosFilesetProps> {
        java.lang.Object fileSystemId;
        java.lang.Object fileSystemPath;
        java.lang.Object description;

        /**
         * Sets the value of {@link RosFilesetProps#getFileSystemId}
         * @param fileSystemId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder fileSystemId(java.lang.String fileSystemId) {
            this.fileSystemId = fileSystemId;
            return this;
        }

        /**
         * Sets the value of {@link RosFilesetProps#getFileSystemId}
         * @param fileSystemId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder fileSystemId(com.aliyun.ros.cdk.core.IResolvable fileSystemId) {
            this.fileSystemId = fileSystemId;
            return this;
        }

        /**
         * Sets the value of {@link RosFilesetProps#getFileSystemPath}
         * @param fileSystemPath the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder fileSystemPath(java.lang.String fileSystemPath) {
            this.fileSystemPath = fileSystemPath;
            return this;
        }

        /**
         * Sets the value of {@link RosFilesetProps#getFileSystemPath}
         * @param fileSystemPath the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder fileSystemPath(com.aliyun.ros.cdk.core.IResolvable fileSystemPath) {
            this.fileSystemPath = fileSystemPath;
            return this;
        }

        /**
         * Sets the value of {@link RosFilesetProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosFilesetProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosFilesetProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosFilesetProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosFilesetProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosFilesetProps {
        private final java.lang.Object fileSystemId;
        private final java.lang.Object fileSystemPath;
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.fileSystemId = software.amazon.jsii.Kernel.get(this, "fileSystemId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.fileSystemPath = software.amazon.jsii.Kernel.get(this, "fileSystemPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.fileSystemId = java.util.Objects.requireNonNull(builder.fileSystemId, "fileSystemId is required");
            this.fileSystemPath = java.util.Objects.requireNonNull(builder.fileSystemPath, "fileSystemPath is required");
            this.description = builder.description;
        }

        @Override
        public final java.lang.Object getFileSystemId() {
            return this.fileSystemId;
        }

        @Override
        public final java.lang.Object getFileSystemPath() {
            return this.fileSystemPath;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("fileSystemId", om.valueToTree(this.getFileSystemId()));
            data.set("fileSystemPath", om.valueToTree(this.getFileSystemPath()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nas.RosFilesetProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosFilesetProps.Jsii$Proxy that = (RosFilesetProps.Jsii$Proxy) o;

            if (!fileSystemId.equals(that.fileSystemId)) return false;
            if (!fileSystemPath.equals(that.fileSystemPath)) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.fileSystemId.hashCode();
            result = 31 * result + (this.fileSystemPath.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}
