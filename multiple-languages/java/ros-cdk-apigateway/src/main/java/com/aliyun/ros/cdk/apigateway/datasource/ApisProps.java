package com.aliyun.ros.cdk.apigateway.datasource;

/**
 * Properties for defining a <code>Apis</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-apis
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:52.663Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.datasource.ApisProps")
@software.amazon.jsii.Jsii.Proxy(ApisProps.Jsii$Proxy.class)
public interface ApisProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property apiId: ID of the specified API.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getApiId() {
        return null;
    }

    /**
     * Property apiName: API name (fuzzy matching).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getApiName() {
        return null;
    }

    /**
     * Property catalogId: Catalog number.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCatalogId() {
        return null;
    }

    /**
     * Property enableTagAuth: Enable label validation.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableTagAuth() {
        return null;
    }

    /**
     * Property groupId: ID of the specified group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroupId() {
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
     * Property visibility: Whether the API is public.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVisibility() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ApisProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ApisProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ApisProps> {
        java.lang.Object apiId;
        java.lang.Object apiName;
        java.lang.Object catalogId;
        java.lang.Object enableTagAuth;
        java.lang.Object groupId;
        java.lang.Object refreshOptions;
        java.lang.Object visibility;

        /**
         * Sets the value of {@link ApisProps#getApiId}
         * @param apiId Property apiId: ID of the specified API.
         * @return {@code this}
         */
        public Builder apiId(java.lang.String apiId) {
            this.apiId = apiId;
            return this;
        }

        /**
         * Sets the value of {@link ApisProps#getApiId}
         * @param apiId Property apiId: ID of the specified API.
         * @return {@code this}
         */
        public Builder apiId(com.aliyun.ros.cdk.core.IResolvable apiId) {
            this.apiId = apiId;
            return this;
        }

        /**
         * Sets the value of {@link ApisProps#getApiName}
         * @param apiName Property apiName: API name (fuzzy matching).
         * @return {@code this}
         */
        public Builder apiName(java.lang.String apiName) {
            this.apiName = apiName;
            return this;
        }

        /**
         * Sets the value of {@link ApisProps#getApiName}
         * @param apiName Property apiName: API name (fuzzy matching).
         * @return {@code this}
         */
        public Builder apiName(com.aliyun.ros.cdk.core.IResolvable apiName) {
            this.apiName = apiName;
            return this;
        }

        /**
         * Sets the value of {@link ApisProps#getCatalogId}
         * @param catalogId Property catalogId: Catalog number.
         * @return {@code this}
         */
        public Builder catalogId(java.lang.String catalogId) {
            this.catalogId = catalogId;
            return this;
        }

        /**
         * Sets the value of {@link ApisProps#getCatalogId}
         * @param catalogId Property catalogId: Catalog number.
         * @return {@code this}
         */
        public Builder catalogId(com.aliyun.ros.cdk.core.IResolvable catalogId) {
            this.catalogId = catalogId;
            return this;
        }

        /**
         * Sets the value of {@link ApisProps#getEnableTagAuth}
         * @param enableTagAuth Property enableTagAuth: Enable label validation.
         * @return {@code this}
         */
        public Builder enableTagAuth(java.lang.Boolean enableTagAuth) {
            this.enableTagAuth = enableTagAuth;
            return this;
        }

        /**
         * Sets the value of {@link ApisProps#getEnableTagAuth}
         * @param enableTagAuth Property enableTagAuth: Enable label validation.
         * @return {@code this}
         */
        public Builder enableTagAuth(com.aliyun.ros.cdk.core.IResolvable enableTagAuth) {
            this.enableTagAuth = enableTagAuth;
            return this;
        }

        /**
         * Sets the value of {@link ApisProps#getGroupId}
         * @param groupId Property groupId: ID of the specified group.
         * @return {@code this}
         */
        public Builder groupId(java.lang.String groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link ApisProps#getGroupId}
         * @param groupId Property groupId: ID of the specified group.
         * @return {@code this}
         */
        public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link ApisProps#getRefreshOptions}
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
         * Sets the value of {@link ApisProps#getRefreshOptions}
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
         * Sets the value of {@link ApisProps#getVisibility}
         * @param visibility Property visibility: Whether the API is public.
         * @return {@code this}
         */
        public Builder visibility(java.lang.String visibility) {
            this.visibility = visibility;
            return this;
        }

        /**
         * Sets the value of {@link ApisProps#getVisibility}
         * @param visibility Property visibility: Whether the API is public.
         * @return {@code this}
         */
        public Builder visibility(com.aliyun.ros.cdk.core.IResolvable visibility) {
            this.visibility = visibility;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ApisProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ApisProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ApisProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ApisProps {
        private final java.lang.Object apiId;
        private final java.lang.Object apiName;
        private final java.lang.Object catalogId;
        private final java.lang.Object enableTagAuth;
        private final java.lang.Object groupId;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object visibility;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.apiId = software.amazon.jsii.Kernel.get(this, "apiId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.apiName = software.amazon.jsii.Kernel.get(this, "apiName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.catalogId = software.amazon.jsii.Kernel.get(this, "catalogId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableTagAuth = software.amazon.jsii.Kernel.get(this, "enableTagAuth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.visibility = software.amazon.jsii.Kernel.get(this, "visibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.apiId = builder.apiId;
            this.apiName = builder.apiName;
            this.catalogId = builder.catalogId;
            this.enableTagAuth = builder.enableTagAuth;
            this.groupId = builder.groupId;
            this.refreshOptions = builder.refreshOptions;
            this.visibility = builder.visibility;
        }

        @Override
        public final java.lang.Object getApiId() {
            return this.apiId;
        }

        @Override
        public final java.lang.Object getApiName() {
            return this.apiName;
        }

        @Override
        public final java.lang.Object getCatalogId() {
            return this.catalogId;
        }

        @Override
        public final java.lang.Object getEnableTagAuth() {
            return this.enableTagAuth;
        }

        @Override
        public final java.lang.Object getGroupId() {
            return this.groupId;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getVisibility() {
            return this.visibility;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getApiId() != null) {
                data.set("apiId", om.valueToTree(this.getApiId()));
            }
            if (this.getApiName() != null) {
                data.set("apiName", om.valueToTree(this.getApiName()));
            }
            if (this.getCatalogId() != null) {
                data.set("catalogId", om.valueToTree(this.getCatalogId()));
            }
            if (this.getEnableTagAuth() != null) {
                data.set("enableTagAuth", om.valueToTree(this.getEnableTagAuth()));
            }
            if (this.getGroupId() != null) {
                data.set("groupId", om.valueToTree(this.getGroupId()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getVisibility() != null) {
                data.set("visibility", om.valueToTree(this.getVisibility()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.datasource.ApisProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ApisProps.Jsii$Proxy that = (ApisProps.Jsii$Proxy) o;

            if (this.apiId != null ? !this.apiId.equals(that.apiId) : that.apiId != null) return false;
            if (this.apiName != null ? !this.apiName.equals(that.apiName) : that.apiName != null) return false;
            if (this.catalogId != null ? !this.catalogId.equals(that.catalogId) : that.catalogId != null) return false;
            if (this.enableTagAuth != null ? !this.enableTagAuth.equals(that.enableTagAuth) : that.enableTagAuth != null) return false;
            if (this.groupId != null ? !this.groupId.equals(that.groupId) : that.groupId != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            return this.visibility != null ? this.visibility.equals(that.visibility) : that.visibility == null;
        }

        @Override
        public final int hashCode() {
            int result = this.apiId != null ? this.apiId.hashCode() : 0;
            result = 31 * result + (this.apiName != null ? this.apiName.hashCode() : 0);
            result = 31 * result + (this.catalogId != null ? this.catalogId.hashCode() : 0);
            result = 31 * result + (this.enableTagAuth != null ? this.enableTagAuth.hashCode() : 0);
            result = 31 * result + (this.groupId != null ? this.groupId.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.visibility != null ? this.visibility.hashCode() : 0);
            return result;
        }
    }
}
