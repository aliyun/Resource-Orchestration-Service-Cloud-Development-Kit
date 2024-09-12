package com.aliyun.ros.cdk.sae.datasource;

/**
 * Properties for defining a <code>Applications</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sae-applications
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:30.548Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.datasource.ApplicationsProps")
@software.amazon.jsii.Jsii.Proxy(ApplicationsProps.Jsii$Proxy.class)
public interface ApplicationsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property appName: The name of application.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAppName() {
        return null;
    }

    /**
     * Property fieldType: Set the dimension of the filter application.
     * <p>
     * Valid values:
     * appName: The application name.
     * appIds: App IDs.
     * slbIps: SLB IP address.
     * instanceIps: Instance IP address.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFieldType() {
        return null;
    }

    /**
     * Property fieldValue: Enter the application name, application ID, SLB IP address, or instance IP address of the target application.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFieldValue() {
        return null;
    }

    /**
     * Property namespaceId: The ID of namespace.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNamespaceId() {
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
     * @return a {@link Builder} of {@link ApplicationsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ApplicationsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ApplicationsProps> {
        java.lang.Object appName;
        java.lang.Object fieldType;
        java.lang.Object fieldValue;
        java.lang.Object namespaceId;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link ApplicationsProps#getAppName}
         * @param appName Property appName: The name of application.
         * @return {@code this}
         */
        public Builder appName(java.lang.String appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationsProps#getAppName}
         * @param appName Property appName: The name of application.
         * @return {@code this}
         */
        public Builder appName(com.aliyun.ros.cdk.core.IResolvable appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationsProps#getFieldType}
         * @param fieldType Property fieldType: Set the dimension of the filter application.
         *                  Valid values:
         *                  appName: The application name.
         *                  appIds: App IDs.
         *                  slbIps: SLB IP address.
         *                  instanceIps: Instance IP address.
         * @return {@code this}
         */
        public Builder fieldType(java.lang.String fieldType) {
            this.fieldType = fieldType;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationsProps#getFieldType}
         * @param fieldType Property fieldType: Set the dimension of the filter application.
         *                  Valid values:
         *                  appName: The application name.
         *                  appIds: App IDs.
         *                  slbIps: SLB IP address.
         *                  instanceIps: Instance IP address.
         * @return {@code this}
         */
        public Builder fieldType(com.aliyun.ros.cdk.core.IResolvable fieldType) {
            this.fieldType = fieldType;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationsProps#getFieldValue}
         * @param fieldValue Property fieldValue: Enter the application name, application ID, SLB IP address, or instance IP address of the target application.
         * @return {@code this}
         */
        public Builder fieldValue(java.lang.String fieldValue) {
            this.fieldValue = fieldValue;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationsProps#getFieldValue}
         * @param fieldValue Property fieldValue: Enter the application name, application ID, SLB IP address, or instance IP address of the target application.
         * @return {@code this}
         */
        public Builder fieldValue(com.aliyun.ros.cdk.core.IResolvable fieldValue) {
            this.fieldValue = fieldValue;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationsProps#getNamespaceId}
         * @param namespaceId Property namespaceId: The ID of namespace.
         * @return {@code this}
         */
        public Builder namespaceId(java.lang.String namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationsProps#getNamespaceId}
         * @param namespaceId Property namespaceId: The ID of namespace.
         * @return {@code this}
         */
        public Builder namespaceId(com.aliyun.ros.cdk.core.IResolvable namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationsProps#getRefreshOptions}
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
         * Sets the value of {@link ApplicationsProps#getRefreshOptions}
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
         * @return a new instance of {@link ApplicationsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ApplicationsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ApplicationsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ApplicationsProps {
        private final java.lang.Object appName;
        private final java.lang.Object fieldType;
        private final java.lang.Object fieldValue;
        private final java.lang.Object namespaceId;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.appName = software.amazon.jsii.Kernel.get(this, "appName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.fieldType = software.amazon.jsii.Kernel.get(this, "fieldType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.fieldValue = software.amazon.jsii.Kernel.get(this, "fieldValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.namespaceId = software.amazon.jsii.Kernel.get(this, "namespaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.appName = builder.appName;
            this.fieldType = builder.fieldType;
            this.fieldValue = builder.fieldValue;
            this.namespaceId = builder.namespaceId;
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getAppName() {
            return this.appName;
        }

        @Override
        public final java.lang.Object getFieldType() {
            return this.fieldType;
        }

        @Override
        public final java.lang.Object getFieldValue() {
            return this.fieldValue;
        }

        @Override
        public final java.lang.Object getNamespaceId() {
            return this.namespaceId;
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

            if (this.getAppName() != null) {
                data.set("appName", om.valueToTree(this.getAppName()));
            }
            if (this.getFieldType() != null) {
                data.set("fieldType", om.valueToTree(this.getFieldType()));
            }
            if (this.getFieldValue() != null) {
                data.set("fieldValue", om.valueToTree(this.getFieldValue()));
            }
            if (this.getNamespaceId() != null) {
                data.set("namespaceId", om.valueToTree(this.getNamespaceId()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sae.datasource.ApplicationsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ApplicationsProps.Jsii$Proxy that = (ApplicationsProps.Jsii$Proxy) o;

            if (this.appName != null ? !this.appName.equals(that.appName) : that.appName != null) return false;
            if (this.fieldType != null ? !this.fieldType.equals(that.fieldType) : that.fieldType != null) return false;
            if (this.fieldValue != null ? !this.fieldValue.equals(that.fieldValue) : that.fieldValue != null) return false;
            if (this.namespaceId != null ? !this.namespaceId.equals(that.namespaceId) : that.namespaceId != null) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.appName != null ? this.appName.hashCode() : 0;
            result = 31 * result + (this.fieldType != null ? this.fieldType.hashCode() : 0);
            result = 31 * result + (this.fieldValue != null ? this.fieldValue.hashCode() : 0);
            result = 31 * result + (this.namespaceId != null ? this.namespaceId.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
