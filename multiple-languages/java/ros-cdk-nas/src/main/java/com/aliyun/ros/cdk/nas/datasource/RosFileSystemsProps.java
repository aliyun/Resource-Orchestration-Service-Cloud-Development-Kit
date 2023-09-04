package com.aliyun.ros.cdk.nas.datasource;

/**
 * Properties for defining a <code>DATASOURCE::NAS::FileSystems</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:38.490Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.datasource.RosFileSystemsProps")
@software.amazon.jsii.Jsii.Proxy(RosFileSystemsProps.Jsii$Proxy.class)
public interface RosFileSystemsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFileSystemId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFileSystemType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosFileSystemsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosFileSystemsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosFileSystemsProps> {
        java.lang.Object fileSystemId;
        java.lang.Object fileSystemType;

        /**
         * Sets the value of {@link RosFileSystemsProps#getFileSystemId}
         * @param fileSystemId the value to be set.
         * @return {@code this}
         */
        public Builder fileSystemId(java.lang.String fileSystemId) {
            this.fileSystemId = fileSystemId;
            return this;
        }

        /**
         * Sets the value of {@link RosFileSystemsProps#getFileSystemId}
         * @param fileSystemId the value to be set.
         * @return {@code this}
         */
        public Builder fileSystemId(com.aliyun.ros.cdk.core.IResolvable fileSystemId) {
            this.fileSystemId = fileSystemId;
            return this;
        }

        /**
         * Sets the value of {@link RosFileSystemsProps#getFileSystemType}
         * @param fileSystemType the value to be set.
         * @return {@code this}
         */
        public Builder fileSystemType(java.lang.String fileSystemType) {
            this.fileSystemType = fileSystemType;
            return this;
        }

        /**
         * Sets the value of {@link RosFileSystemsProps#getFileSystemType}
         * @param fileSystemType the value to be set.
         * @return {@code this}
         */
        public Builder fileSystemType(com.aliyun.ros.cdk.core.IResolvable fileSystemType) {
            this.fileSystemType = fileSystemType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosFileSystemsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosFileSystemsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosFileSystemsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosFileSystemsProps {
        private final java.lang.Object fileSystemId;
        private final java.lang.Object fileSystemType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.fileSystemId = software.amazon.jsii.Kernel.get(this, "fileSystemId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.fileSystemType = software.amazon.jsii.Kernel.get(this, "fileSystemType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.fileSystemId = builder.fileSystemId;
            this.fileSystemType = builder.fileSystemType;
        }

        @Override
        public final java.lang.Object getFileSystemId() {
            return this.fileSystemId;
        }

        @Override
        public final java.lang.Object getFileSystemType() {
            return this.fileSystemType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getFileSystemId() != null) {
                data.set("fileSystemId", om.valueToTree(this.getFileSystemId()));
            }
            if (this.getFileSystemType() != null) {
                data.set("fileSystemType", om.valueToTree(this.getFileSystemType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nas.datasource.RosFileSystemsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosFileSystemsProps.Jsii$Proxy that = (RosFileSystemsProps.Jsii$Proxy) o;

            if (this.fileSystemId != null ? !this.fileSystemId.equals(that.fileSystemId) : that.fileSystemId != null) return false;
            return this.fileSystemType != null ? this.fileSystemType.equals(that.fileSystemType) : that.fileSystemType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.fileSystemId != null ? this.fileSystemId.hashCode() : 0;
            result = 31 * result + (this.fileSystemType != null ? this.fileSystemType.hashCode() : 0);
            return result;
        }
    }
}
