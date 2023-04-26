package com.aliyun.ros.cdk.polardb;

/**
 * Properties for defining a `ALIYUN::POLARDB::ParameterGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T03:02:20.499Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.RosParameterGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosParameterGroupProps.Jsii$Proxy.class)
public interface RosParameterGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbVersion();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getParameterGroupName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getParameters();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParameterGroupDesc() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosParameterGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosParameterGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosParameterGroupProps> {
        java.lang.Object dbType;
        java.lang.Object dbVersion;
        java.lang.Object parameterGroupName;
        java.lang.Object parameters;
        java.lang.Object parameterGroupDesc;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link RosParameterGroupProps#getDbType}
         * @param dbType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbType(java.lang.String dbType) {
            this.dbType = dbType;
            return this;
        }

        /**
         * Sets the value of {@link RosParameterGroupProps#getDbType}
         * @param dbType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbType(com.aliyun.ros.cdk.core.IResolvable dbType) {
            this.dbType = dbType;
            return this;
        }

        /**
         * Sets the value of {@link RosParameterGroupProps#getDbVersion}
         * @param dbVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbVersion(java.lang.String dbVersion) {
            this.dbVersion = dbVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosParameterGroupProps#getDbVersion}
         * @param dbVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbVersion(com.aliyun.ros.cdk.core.IResolvable dbVersion) {
            this.dbVersion = dbVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosParameterGroupProps#getParameterGroupName}
         * @param parameterGroupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder parameterGroupName(java.lang.String parameterGroupName) {
            this.parameterGroupName = parameterGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosParameterGroupProps#getParameterGroupName}
         * @param parameterGroupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder parameterGroupName(com.aliyun.ros.cdk.core.IResolvable parameterGroupName) {
            this.parameterGroupName = parameterGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosParameterGroupProps#getParameters}
         * @param parameters the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder parameters(com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link RosParameterGroupProps#getParameters}
         * @param parameters the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder parameters(java.util.List<? extends java.lang.Object> parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link RosParameterGroupProps#getParameterGroupDesc}
         * @param parameterGroupDesc the value to be set.
         * @return {@code this}
         */
        public Builder parameterGroupDesc(java.lang.String parameterGroupDesc) {
            this.parameterGroupDesc = parameterGroupDesc;
            return this;
        }

        /**
         * Sets the value of {@link RosParameterGroupProps#getParameterGroupDesc}
         * @param parameterGroupDesc the value to be set.
         * @return {@code this}
         */
        public Builder parameterGroupDesc(com.aliyun.ros.cdk.core.IResolvable parameterGroupDesc) {
            this.parameterGroupDesc = parameterGroupDesc;
            return this;
        }

        /**
         * Sets the value of {@link RosParameterGroupProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosParameterGroupProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosParameterGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosParameterGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosParameterGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosParameterGroupProps {
        private final java.lang.Object dbType;
        private final java.lang.Object dbVersion;
        private final java.lang.Object parameterGroupName;
        private final java.lang.Object parameters;
        private final java.lang.Object parameterGroupDesc;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbType = software.amazon.jsii.Kernel.get(this, "dbType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbVersion = software.amazon.jsii.Kernel.get(this, "dbVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parameterGroupName = software.amazon.jsii.Kernel.get(this, "parameterGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parameters = software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parameterGroupDesc = software.amazon.jsii.Kernel.get(this, "parameterGroupDesc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbType = java.util.Objects.requireNonNull(builder.dbType, "dbType is required");
            this.dbVersion = java.util.Objects.requireNonNull(builder.dbVersion, "dbVersion is required");
            this.parameterGroupName = java.util.Objects.requireNonNull(builder.parameterGroupName, "parameterGroupName is required");
            this.parameters = java.util.Objects.requireNonNull(builder.parameters, "parameters is required");
            this.parameterGroupDesc = builder.parameterGroupDesc;
            this.resourceGroupId = builder.resourceGroupId;
        }

        @Override
        public final java.lang.Object getDbType() {
            return this.dbType;
        }

        @Override
        public final java.lang.Object getDbVersion() {
            return this.dbVersion;
        }

        @Override
        public final java.lang.Object getParameterGroupName() {
            return this.parameterGroupName;
        }

        @Override
        public final java.lang.Object getParameters() {
            return this.parameters;
        }

        @Override
        public final java.lang.Object getParameterGroupDesc() {
            return this.parameterGroupDesc;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbType", om.valueToTree(this.getDbType()));
            data.set("dbVersion", om.valueToTree(this.getDbVersion()));
            data.set("parameterGroupName", om.valueToTree(this.getParameterGroupName()));
            data.set("parameters", om.valueToTree(this.getParameters()));
            if (this.getParameterGroupDesc() != null) {
                data.set("parameterGroupDesc", om.valueToTree(this.getParameterGroupDesc()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardb.RosParameterGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosParameterGroupProps.Jsii$Proxy that = (RosParameterGroupProps.Jsii$Proxy) o;

            if (!dbType.equals(that.dbType)) return false;
            if (!dbVersion.equals(that.dbVersion)) return false;
            if (!parameterGroupName.equals(that.parameterGroupName)) return false;
            if (!parameters.equals(that.parameters)) return false;
            if (this.parameterGroupDesc != null ? !this.parameterGroupDesc.equals(that.parameterGroupDesc) : that.parameterGroupDesc != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbType.hashCode();
            result = 31 * result + (this.dbVersion.hashCode());
            result = 31 * result + (this.parameterGroupName.hashCode());
            result = 31 * result + (this.parameters.hashCode());
            result = 31 * result + (this.parameterGroupDesc != null ? this.parameterGroupDesc.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
