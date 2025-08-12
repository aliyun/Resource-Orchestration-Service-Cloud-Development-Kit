package com.aliyun.ros.cdk.appflow.datasource;

/**
 * Properties for defining a <code>UserAuthConfigs</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-appflow-userauthconfigs
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:43.932Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.appflow.$Module.class, fqn = "@alicloud/ros-cdk-appflow.datasource.UserAuthConfigsProps")
@software.amazon.jsii.Jsii.Proxy(UserAuthConfigsProps.Jsii$Proxy.class)
public interface UserAuthConfigsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property connectorId: The id of connector.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConnectorId();

    /**
     * Property authConfigNames: The names of the config.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAuthConfigNames() {
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
     * @return a {@link Builder} of {@link UserAuthConfigsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link UserAuthConfigsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<UserAuthConfigsProps> {
        java.lang.Object connectorId;
        java.lang.Object authConfigNames;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link UserAuthConfigsProps#getConnectorId}
         * @param connectorId Property connectorId: The id of connector. This parameter is required.
         * @return {@code this}
         */
        public Builder connectorId(java.lang.String connectorId) {
            this.connectorId = connectorId;
            return this;
        }

        /**
         * Sets the value of {@link UserAuthConfigsProps#getConnectorId}
         * @param connectorId Property connectorId: The id of connector. This parameter is required.
         * @return {@code this}
         */
        public Builder connectorId(com.aliyun.ros.cdk.core.IResolvable connectorId) {
            this.connectorId = connectorId;
            return this;
        }

        /**
         * Sets the value of {@link UserAuthConfigsProps#getAuthConfigNames}
         * @param authConfigNames Property authConfigNames: The names of the config.
         * @return {@code this}
         */
        public Builder authConfigNames(com.aliyun.ros.cdk.core.IResolvable authConfigNames) {
            this.authConfigNames = authConfigNames;
            return this;
        }

        /**
         * Sets the value of {@link UserAuthConfigsProps#getAuthConfigNames}
         * @param authConfigNames Property authConfigNames: The names of the config.
         * @return {@code this}
         */
        public Builder authConfigNames(java.util.List<? extends java.lang.Object> authConfigNames) {
            this.authConfigNames = authConfigNames;
            return this;
        }

        /**
         * Sets the value of {@link UserAuthConfigsProps#getRefreshOptions}
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
         * Sets the value of {@link UserAuthConfigsProps#getRefreshOptions}
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
         * Builds the configured instance.
         * @return a new instance of {@link UserAuthConfigsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public UserAuthConfigsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link UserAuthConfigsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements UserAuthConfigsProps {
        private final java.lang.Object connectorId;
        private final java.lang.Object authConfigNames;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.connectorId = software.amazon.jsii.Kernel.get(this, "connectorId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.authConfigNames = software.amazon.jsii.Kernel.get(this, "authConfigNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.connectorId = java.util.Objects.requireNonNull(builder.connectorId, "connectorId is required");
            this.authConfigNames = builder.authConfigNames;
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getConnectorId() {
            return this.connectorId;
        }

        @Override
        public final java.lang.Object getAuthConfigNames() {
            return this.authConfigNames;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("connectorId", om.valueToTree(this.getConnectorId()));
            if (this.getAuthConfigNames() != null) {
                data.set("authConfigNames", om.valueToTree(this.getAuthConfigNames()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-appflow.datasource.UserAuthConfigsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            UserAuthConfigsProps.Jsii$Proxy that = (UserAuthConfigsProps.Jsii$Proxy) o;

            if (!connectorId.equals(that.connectorId)) return false;
            if (this.authConfigNames != null ? !this.authConfigNames.equals(that.authConfigNames) : that.authConfigNames != null) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.connectorId.hashCode();
            result = 31 * result + (this.authConfigNames != null ? this.authConfigNames.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
