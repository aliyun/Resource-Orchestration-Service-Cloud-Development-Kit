package com.aliyun.ros.cdk.nas;

/**
 * Properties for defining a `ALIYUN::NAS::AccessGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.70.0 (build 03c2f6f)", date = "2022-11-04T06:18:43.161Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.RosAccessGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosAccessGroupProps.Jsii$Proxy.class)
public interface RosAccessGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccessGroupName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccessGroupType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFileSystemType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAccessGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAccessGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAccessGroupProps> {
        java.lang.Object accessGroupName;
        java.lang.Object accessGroupType;
        java.lang.Object description;
        java.lang.Object fileSystemType;

        /**
         * Sets the value of {@link RosAccessGroupProps#getAccessGroupName}
         * @param accessGroupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accessGroupName(java.lang.String accessGroupName) {
            this.accessGroupName = accessGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessGroupProps#getAccessGroupName}
         * @param accessGroupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accessGroupName(com.aliyun.ros.cdk.core.IResolvable accessGroupName) {
            this.accessGroupName = accessGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessGroupProps#getAccessGroupType}
         * @param accessGroupType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accessGroupType(java.lang.String accessGroupType) {
            this.accessGroupType = accessGroupType;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessGroupProps#getAccessGroupType}
         * @param accessGroupType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accessGroupType(com.aliyun.ros.cdk.core.IResolvable accessGroupType) {
            this.accessGroupType = accessGroupType;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessGroupProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessGroupProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessGroupProps#getFileSystemType}
         * @param fileSystemType the value to be set.
         * @return {@code this}
         */
        public Builder fileSystemType(java.lang.String fileSystemType) {
            this.fileSystemType = fileSystemType;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessGroupProps#getFileSystemType}
         * @param fileSystemType the value to be set.
         * @return {@code this}
         */
        public Builder fileSystemType(com.aliyun.ros.cdk.core.IResolvable fileSystemType) {
            this.fileSystemType = fileSystemType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAccessGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAccessGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAccessGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAccessGroupProps {
        private final java.lang.Object accessGroupName;
        private final java.lang.Object accessGroupType;
        private final java.lang.Object description;
        private final java.lang.Object fileSystemType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accessGroupName = software.amazon.jsii.Kernel.get(this, "accessGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accessGroupType = software.amazon.jsii.Kernel.get(this, "accessGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.fileSystemType = software.amazon.jsii.Kernel.get(this, "fileSystemType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accessGroupName = java.util.Objects.requireNonNull(builder.accessGroupName, "accessGroupName is required");
            this.accessGroupType = java.util.Objects.requireNonNull(builder.accessGroupType, "accessGroupType is required");
            this.description = builder.description;
            this.fileSystemType = builder.fileSystemType;
        }

        @Override
        public final java.lang.Object getAccessGroupName() {
            return this.accessGroupName;
        }

        @Override
        public final java.lang.Object getAccessGroupType() {
            return this.accessGroupType;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
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

            data.set("accessGroupName", om.valueToTree(this.getAccessGroupName()));
            data.set("accessGroupType", om.valueToTree(this.getAccessGroupType()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getFileSystemType() != null) {
                data.set("fileSystemType", om.valueToTree(this.getFileSystemType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nas.RosAccessGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAccessGroupProps.Jsii$Proxy that = (RosAccessGroupProps.Jsii$Proxy) o;

            if (!accessGroupName.equals(that.accessGroupName)) return false;
            if (!accessGroupType.equals(that.accessGroupType)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.fileSystemType != null ? this.fileSystemType.equals(that.fileSystemType) : that.fileSystemType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.accessGroupName.hashCode();
            result = 31 * result + (this.accessGroupType.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.fileSystemType != null ? this.fileSystemType.hashCode() : 0);
            return result;
        }
    }
}
