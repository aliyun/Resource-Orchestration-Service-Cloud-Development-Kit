package com.aliyun.ros.cdk.polardb;

/**
 * Properties for defining a <code>ParameterGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-parametergroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:13.027Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.ParameterGroupProps")
@software.amazon.jsii.Jsii.Proxy(ParameterGroupProps.Jsii$Proxy.class)
public interface ParameterGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dbType: The type of the database engine.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbType();

    /**
     * Property dbVersion: The version of the database engine.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbVersion();

    /**
     * Property parameterGroupName: The name of the parameter template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getParameterGroupName();

    /**
     * Property parameters: The list of the parameters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getParameters();

    /**
     * Property parameterGroupDesc: The description of the parameter template.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParameterGroupDesc() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ParameterGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ParameterGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ParameterGroupProps> {
        java.lang.Object dbType;
        java.lang.Object dbVersion;
        java.lang.Object parameterGroupName;
        java.lang.Object parameters;
        java.lang.Object parameterGroupDesc;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link ParameterGroupProps#getDbType}
         * @param dbType Property dbType: The type of the database engine. This parameter is required.
         * @return {@code this}
         */
        public Builder dbType(java.lang.String dbType) {
            this.dbType = dbType;
            return this;
        }

        /**
         * Sets the value of {@link ParameterGroupProps#getDbType}
         * @param dbType Property dbType: The type of the database engine. This parameter is required.
         * @return {@code this}
         */
        public Builder dbType(com.aliyun.ros.cdk.core.IResolvable dbType) {
            this.dbType = dbType;
            return this;
        }

        /**
         * Sets the value of {@link ParameterGroupProps#getDbVersion}
         * @param dbVersion Property dbVersion: The version of the database engine. This parameter is required.
         * @return {@code this}
         */
        public Builder dbVersion(java.lang.String dbVersion) {
            this.dbVersion = dbVersion;
            return this;
        }

        /**
         * Sets the value of {@link ParameterGroupProps#getDbVersion}
         * @param dbVersion Property dbVersion: The version of the database engine. This parameter is required.
         * @return {@code this}
         */
        public Builder dbVersion(com.aliyun.ros.cdk.core.IResolvable dbVersion) {
            this.dbVersion = dbVersion;
            return this;
        }

        /**
         * Sets the value of {@link ParameterGroupProps#getParameterGroupName}
         * @param parameterGroupName Property parameterGroupName: The name of the parameter template. This parameter is required.
         * @return {@code this}
         */
        public Builder parameterGroupName(java.lang.String parameterGroupName) {
            this.parameterGroupName = parameterGroupName;
            return this;
        }

        /**
         * Sets the value of {@link ParameterGroupProps#getParameterGroupName}
         * @param parameterGroupName Property parameterGroupName: The name of the parameter template. This parameter is required.
         * @return {@code this}
         */
        public Builder parameterGroupName(com.aliyun.ros.cdk.core.IResolvable parameterGroupName) {
            this.parameterGroupName = parameterGroupName;
            return this;
        }

        /**
         * Sets the value of {@link ParameterGroupProps#getParameters}
         * @param parameters Property parameters: The list of the parameters. This parameter is required.
         * @return {@code this}
         */
        public Builder parameters(com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link ParameterGroupProps#getParameters}
         * @param parameters Property parameters: The list of the parameters. This parameter is required.
         * @return {@code this}
         */
        public Builder parameters(java.util.List<? extends java.lang.Object> parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link ParameterGroupProps#getParameterGroupDesc}
         * @param parameterGroupDesc Property parameterGroupDesc: The description of the parameter template.
         * @return {@code this}
         */
        public Builder parameterGroupDesc(java.lang.String parameterGroupDesc) {
            this.parameterGroupDesc = parameterGroupDesc;
            return this;
        }

        /**
         * Sets the value of {@link ParameterGroupProps#getParameterGroupDesc}
         * @param parameterGroupDesc Property parameterGroupDesc: The description of the parameter template.
         * @return {@code this}
         */
        public Builder parameterGroupDesc(com.aliyun.ros.cdk.core.IResolvable parameterGroupDesc) {
            this.parameterGroupDesc = parameterGroupDesc;
            return this;
        }

        /**
         * Sets the value of {@link ParameterGroupProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ParameterGroupProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ParameterGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ParameterGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ParameterGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ParameterGroupProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardb.ParameterGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ParameterGroupProps.Jsii$Proxy that = (ParameterGroupProps.Jsii$Proxy) o;

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
