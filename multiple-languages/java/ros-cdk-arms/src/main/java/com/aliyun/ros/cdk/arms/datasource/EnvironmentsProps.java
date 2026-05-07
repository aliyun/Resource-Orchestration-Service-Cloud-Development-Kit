package com.aliyun.ros.cdk.arms.datasource;

/**
 * Properties for defining a <code>Environments</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-environments
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:45.897Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.datasource.EnvironmentsProps")
@software.amazon.jsii.Jsii.Proxy(EnvironmentsProps.Jsii$Proxy.class)
public interface EnvironmentsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property bindResourceId: The bound resource ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBindResourceId() {
        return null;
    }

    /**
     * Property environmentType: Type of environment.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnvironmentType() {
        return null;
    }

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
     * <li>Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link EnvironmentsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link EnvironmentsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<EnvironmentsProps> {
        java.lang.Object bindResourceId;
        java.lang.Object environmentType;
        java.lang.Object refreshOptions;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link EnvironmentsProps#getBindResourceId}
         * @param bindResourceId Property bindResourceId: The bound resource ID.
         * @return {@code this}
         */
        public Builder bindResourceId(java.lang.String bindResourceId) {
            this.bindResourceId = bindResourceId;
            return this;
        }

        /**
         * Sets the value of {@link EnvironmentsProps#getBindResourceId}
         * @param bindResourceId Property bindResourceId: The bound resource ID.
         * @return {@code this}
         */
        public Builder bindResourceId(com.aliyun.ros.cdk.core.IResolvable bindResourceId) {
            this.bindResourceId = bindResourceId;
            return this;
        }

        /**
         * Sets the value of {@link EnvironmentsProps#getEnvironmentType}
         * @param environmentType Property environmentType: Type of environment.
         * @return {@code this}
         */
        public Builder environmentType(java.lang.String environmentType) {
            this.environmentType = environmentType;
            return this;
        }

        /**
         * Sets the value of {@link EnvironmentsProps#getEnvironmentType}
         * @param environmentType Property environmentType: Type of environment.
         * @return {@code this}
         */
        public Builder environmentType(com.aliyun.ros.cdk.core.IResolvable environmentType) {
            this.environmentType = environmentType;
            return this;
        }

        /**
         * Sets the value of {@link EnvironmentsProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link EnvironmentsProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link EnvironmentsProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link EnvironmentsProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link EnvironmentsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public EnvironmentsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link EnvironmentsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EnvironmentsProps {
        private final java.lang.Object bindResourceId;
        private final java.lang.Object environmentType;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bindResourceId = software.amazon.jsii.Kernel.get(this, "bindResourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.environmentType = software.amazon.jsii.Kernel.get(this, "environmentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bindResourceId = builder.bindResourceId;
            this.environmentType = builder.environmentType;
            this.refreshOptions = builder.refreshOptions;
            this.resourceGroupId = builder.resourceGroupId;
        }

        @Override
        public final java.lang.Object getBindResourceId() {
            return this.bindResourceId;
        }

        @Override
        public final java.lang.Object getEnvironmentType() {
            return this.environmentType;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
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

            if (this.getBindResourceId() != null) {
                data.set("bindResourceId", om.valueToTree(this.getBindResourceId()));
            }
            if (this.getEnvironmentType() != null) {
                data.set("environmentType", om.valueToTree(this.getEnvironmentType()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-arms.datasource.EnvironmentsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            EnvironmentsProps.Jsii$Proxy that = (EnvironmentsProps.Jsii$Proxy) o;

            if (this.bindResourceId != null ? !this.bindResourceId.equals(that.bindResourceId) : that.bindResourceId != null) return false;
            if (this.environmentType != null ? !this.environmentType.equals(that.environmentType) : that.environmentType != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bindResourceId != null ? this.bindResourceId.hashCode() : 0;
            result = 31 * result + (this.environmentType != null ? this.environmentType.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
