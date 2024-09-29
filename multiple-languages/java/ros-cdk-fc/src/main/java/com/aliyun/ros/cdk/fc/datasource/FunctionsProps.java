package com.aliyun.ros.cdk.fc.datasource;

/**
 * Properties for defining a <code>Functions</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-functions
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:43.593Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.datasource.FunctionsProps")
@software.amazon.jsii.Jsii.Proxy(FunctionsProps.Jsii$Proxy.class)
public interface FunctionsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property serviceName: Service name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServiceName();

    /**
     * Property prefix: Qualified returned function names must be prefixed with Prefix.
     * <p>
     * For example, if the Prefix is "a", the returned function names should be started with "a".
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrefix() {
        return null;
    }

    /**
     * Property qualifier: The service version, which can be version ID or alias name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQualifier() {
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
     * @return a {@link Builder} of {@link FunctionsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link FunctionsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<FunctionsProps> {
        java.lang.Object serviceName;
        java.lang.Object prefix;
        java.lang.Object qualifier;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link FunctionsProps#getServiceName}
         * @param serviceName Property serviceName: Service name. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceName(java.lang.String serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link FunctionsProps#getServiceName}
         * @param serviceName Property serviceName: Service name. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceName(com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link FunctionsProps#getPrefix}
         * @param prefix Property prefix: Qualified returned function names must be prefixed with Prefix.
         *               For example, if the Prefix is "a", the returned function names should be started with "a".
         * @return {@code this}
         */
        public Builder prefix(java.lang.String prefix) {
            this.prefix = prefix;
            return this;
        }

        /**
         * Sets the value of {@link FunctionsProps#getPrefix}
         * @param prefix Property prefix: Qualified returned function names must be prefixed with Prefix.
         *               For example, if the Prefix is "a", the returned function names should be started with "a".
         * @return {@code this}
         */
        public Builder prefix(com.aliyun.ros.cdk.core.IResolvable prefix) {
            this.prefix = prefix;
            return this;
        }

        /**
         * Sets the value of {@link FunctionsProps#getQualifier}
         * @param qualifier Property qualifier: The service version, which can be version ID or alias name.
         * @return {@code this}
         */
        public Builder qualifier(java.lang.String qualifier) {
            this.qualifier = qualifier;
            return this;
        }

        /**
         * Sets the value of {@link FunctionsProps#getQualifier}
         * @param qualifier Property qualifier: The service version, which can be version ID or alias name.
         * @return {@code this}
         */
        public Builder qualifier(com.aliyun.ros.cdk.core.IResolvable qualifier) {
            this.qualifier = qualifier;
            return this;
        }

        /**
         * Sets the value of {@link FunctionsProps#getRefreshOptions}
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
         * Sets the value of {@link FunctionsProps#getRefreshOptions}
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
         * @return a new instance of {@link FunctionsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public FunctionsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link FunctionsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FunctionsProps {
        private final java.lang.Object serviceName;
        private final java.lang.Object prefix;
        private final java.lang.Object qualifier;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.serviceName = software.amazon.jsii.Kernel.get(this, "serviceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.prefix = software.amazon.jsii.Kernel.get(this, "prefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.qualifier = software.amazon.jsii.Kernel.get(this, "qualifier", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.serviceName = java.util.Objects.requireNonNull(builder.serviceName, "serviceName is required");
            this.prefix = builder.prefix;
            this.qualifier = builder.qualifier;
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getServiceName() {
            return this.serviceName;
        }

        @Override
        public final java.lang.Object getPrefix() {
            return this.prefix;
        }

        @Override
        public final java.lang.Object getQualifier() {
            return this.qualifier;
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

            data.set("serviceName", om.valueToTree(this.getServiceName()));
            if (this.getPrefix() != null) {
                data.set("prefix", om.valueToTree(this.getPrefix()));
            }
            if (this.getQualifier() != null) {
                data.set("qualifier", om.valueToTree(this.getQualifier()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.datasource.FunctionsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            FunctionsProps.Jsii$Proxy that = (FunctionsProps.Jsii$Proxy) o;

            if (!serviceName.equals(that.serviceName)) return false;
            if (this.prefix != null ? !this.prefix.equals(that.prefix) : that.prefix != null) return false;
            if (this.qualifier != null ? !this.qualifier.equals(that.qualifier) : that.qualifier != null) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.serviceName.hashCode();
            result = 31 * result + (this.prefix != null ? this.prefix.hashCode() : 0);
            result = 31 * result + (this.qualifier != null ? this.qualifier.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
