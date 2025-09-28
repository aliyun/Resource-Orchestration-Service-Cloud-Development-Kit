package com.aliyun.ros.cdk.cs.datasource;

/**
 * Properties for defining a <code>RosClusterApplicationResources</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusterapplicationresources
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:22.999Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.datasource.RosClusterApplicationResourcesProps")
@software.amazon.jsii.Jsii.Proxy(RosClusterApplicationResourcesProps.Jsii$Proxy.class)
public interface RosClusterApplicationResourcesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getKind();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getApiVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFirstMatch() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getJsonPath() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNamespace() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosClusterApplicationResourcesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosClusterApplicationResourcesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosClusterApplicationResourcesProps> {
        java.lang.Object clusterId;
        java.lang.Object kind;
        java.lang.Object apiVersion;
        java.lang.Object firstMatch;
        java.lang.Object jsonPath;
        java.lang.Object name;
        java.lang.Object namespace;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link RosClusterApplicationResourcesProps#getClusterId}
         * @param clusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(java.lang.String clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterApplicationResourcesProps#getClusterId}
         * @param clusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterApplicationResourcesProps#getKind}
         * @param kind the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder kind(java.lang.String kind) {
            this.kind = kind;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterApplicationResourcesProps#getKind}
         * @param kind the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder kind(com.aliyun.ros.cdk.core.IResolvable kind) {
            this.kind = kind;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterApplicationResourcesProps#getApiVersion}
         * @param apiVersion the value to be set.
         * @return {@code this}
         */
        public Builder apiVersion(java.lang.String apiVersion) {
            this.apiVersion = apiVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterApplicationResourcesProps#getApiVersion}
         * @param apiVersion the value to be set.
         * @return {@code this}
         */
        public Builder apiVersion(com.aliyun.ros.cdk.core.IResolvable apiVersion) {
            this.apiVersion = apiVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterApplicationResourcesProps#getFirstMatch}
         * @param firstMatch the value to be set.
         * @return {@code this}
         */
        public Builder firstMatch(java.lang.Boolean firstMatch) {
            this.firstMatch = firstMatch;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterApplicationResourcesProps#getFirstMatch}
         * @param firstMatch the value to be set.
         * @return {@code this}
         */
        public Builder firstMatch(com.aliyun.ros.cdk.core.IResolvable firstMatch) {
            this.firstMatch = firstMatch;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterApplicationResourcesProps#getJsonPath}
         * @param jsonPath the value to be set.
         * @return {@code this}
         */
        public Builder jsonPath(java.lang.String jsonPath) {
            this.jsonPath = jsonPath;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterApplicationResourcesProps#getJsonPath}
         * @param jsonPath the value to be set.
         * @return {@code this}
         */
        public Builder jsonPath(com.aliyun.ros.cdk.core.IResolvable jsonPath) {
            this.jsonPath = jsonPath;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterApplicationResourcesProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterApplicationResourcesProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterApplicationResourcesProps#getNamespace}
         * @param namespace the value to be set.
         * @return {@code this}
         */
        public Builder namespace(java.lang.String namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterApplicationResourcesProps#getNamespace}
         * @param namespace the value to be set.
         * @return {@code this}
         */
        public Builder namespace(com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterApplicationResourcesProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterApplicationResourcesProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosClusterApplicationResourcesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosClusterApplicationResourcesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosClusterApplicationResourcesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosClusterApplicationResourcesProps {
        private final java.lang.Object clusterId;
        private final java.lang.Object kind;
        private final java.lang.Object apiVersion;
        private final java.lang.Object firstMatch;
        private final java.lang.Object jsonPath;
        private final java.lang.Object name;
        private final java.lang.Object namespace;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterId = software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.kind = software.amazon.jsii.Kernel.get(this, "kind", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.apiVersion = software.amazon.jsii.Kernel.get(this, "apiVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.firstMatch = software.amazon.jsii.Kernel.get(this, "firstMatch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.jsonPath = software.amazon.jsii.Kernel.get(this, "jsonPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.namespace = software.amazon.jsii.Kernel.get(this, "namespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterId = java.util.Objects.requireNonNull(builder.clusterId, "clusterId is required");
            this.kind = java.util.Objects.requireNonNull(builder.kind, "kind is required");
            this.apiVersion = builder.apiVersion;
            this.firstMatch = builder.firstMatch;
            this.jsonPath = builder.jsonPath;
            this.name = builder.name;
            this.namespace = builder.namespace;
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getClusterId() {
            return this.clusterId;
        }

        @Override
        public final java.lang.Object getKind() {
            return this.kind;
        }

        @Override
        public final java.lang.Object getApiVersion() {
            return this.apiVersion;
        }

        @Override
        public final java.lang.Object getFirstMatch() {
            return this.firstMatch;
        }

        @Override
        public final java.lang.Object getJsonPath() {
            return this.jsonPath;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getNamespace() {
            return this.namespace;
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

            data.set("clusterId", om.valueToTree(this.getClusterId()));
            data.set("kind", om.valueToTree(this.getKind()));
            if (this.getApiVersion() != null) {
                data.set("apiVersion", om.valueToTree(this.getApiVersion()));
            }
            if (this.getFirstMatch() != null) {
                data.set("firstMatch", om.valueToTree(this.getFirstMatch()));
            }
            if (this.getJsonPath() != null) {
                data.set("jsonPath", om.valueToTree(this.getJsonPath()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getNamespace() != null) {
                data.set("namespace", om.valueToTree(this.getNamespace()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.datasource.RosClusterApplicationResourcesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosClusterApplicationResourcesProps.Jsii$Proxy that = (RosClusterApplicationResourcesProps.Jsii$Proxy) o;

            if (!clusterId.equals(that.clusterId)) return false;
            if (!kind.equals(that.kind)) return false;
            if (this.apiVersion != null ? !this.apiVersion.equals(that.apiVersion) : that.apiVersion != null) return false;
            if (this.firstMatch != null ? !this.firstMatch.equals(that.firstMatch) : that.firstMatch != null) return false;
            if (this.jsonPath != null ? !this.jsonPath.equals(that.jsonPath) : that.jsonPath != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.namespace != null ? !this.namespace.equals(that.namespace) : that.namespace != null) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clusterId.hashCode();
            result = 31 * result + (this.kind.hashCode());
            result = 31 * result + (this.apiVersion != null ? this.apiVersion.hashCode() : 0);
            result = 31 * result + (this.firstMatch != null ? this.firstMatch.hashCode() : 0);
            result = 31 * result + (this.jsonPath != null ? this.jsonPath.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.namespace != null ? this.namespace.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
