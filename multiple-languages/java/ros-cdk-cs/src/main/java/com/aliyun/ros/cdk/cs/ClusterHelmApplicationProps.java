package com.aliyun.ros.cdk.cs;

/**
 * Properties for defining a <code>ClusterHelmApplication</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusterhelmapplication
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:03.398Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.ClusterHelmApplicationProps")
@software.amazon.jsii.Jsii.Proxy(ClusterHelmApplicationProps.Jsii$Proxy.class)
public interface ClusterHelmApplicationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property chartUrl: The URL of chart.
     * <p>
     * Supports HTTP or HTTPS.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getChartUrl();

    /**
     * Property clusterId: The ID of the kubernetes cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterId();

    /**
     * Property name: The name for helm release.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property chartValues: Chart custom values.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getChartValues() {
        return null;
    }

    /**
     * Property credential: The credential of ACR repo.
     * <p>
     * Only take effects when ChartUrl is the address of ACR repo.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCredential() {
        return null;
    }

    /**
     * Property namespace: Namespace to use with helm.
     * <p>
     * Default is default.
     * If the Namespace does not exist, ROS will automatically create it and delete it during the deletion phase.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNamespace() {
        return null;
    }

    /**
     * Property rolePolicy: Before deploying the application, check the policies associated with the roles of the current user.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>EnsureAdminRoleAndBinding: Automatically create a role named "ros:application-admin:${user-id}" with administrator permissions and bind it to the current user.</li>
     * <li>None: Do nothing.
     * The default value is EnsureAdminRoleAndBinding.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRolePolicy() {
        return null;
    }

    /**
     * Property validationMode: Validation modes include: - Basic: basic validation, such as verifying the existence of a cluster.
     * <p>
     * <ul>
     * <li>Strict: in addition to basic validation, also validate the legality of WaitUntil.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getValidationMode() {
        return null;
    }

    /**
     * Property waitUntil: After starting a creation or update, wait until all conditions are met.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWaitUntil() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ClusterHelmApplicationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ClusterHelmApplicationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ClusterHelmApplicationProps> {
        java.lang.Object chartUrl;
        java.lang.Object clusterId;
        java.lang.Object name;
        java.lang.Object chartValues;
        java.lang.Object credential;
        java.lang.Object namespace;
        java.lang.Object rolePolicy;
        java.lang.Object validationMode;
        java.lang.Object waitUntil;

        /**
         * Sets the value of {@link ClusterHelmApplicationProps#getChartUrl}
         * @param chartUrl Property chartUrl: The URL of chart. This parameter is required.
         *                 Supports HTTP or HTTPS.
         * @return {@code this}
         */
        public Builder chartUrl(java.lang.String chartUrl) {
            this.chartUrl = chartUrl;
            return this;
        }

        /**
         * Sets the value of {@link ClusterHelmApplicationProps#getChartUrl}
         * @param chartUrl Property chartUrl: The URL of chart. This parameter is required.
         *                 Supports HTTP or HTTPS.
         * @return {@code this}
         */
        public Builder chartUrl(com.aliyun.ros.cdk.core.IResolvable chartUrl) {
            this.chartUrl = chartUrl;
            return this;
        }

        /**
         * Sets the value of {@link ClusterHelmApplicationProps#getClusterId}
         * @param clusterId Property clusterId: The ID of the kubernetes cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(java.lang.String clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterHelmApplicationProps#getClusterId}
         * @param clusterId Property clusterId: The ID of the kubernetes cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterHelmApplicationProps#getName}
         * @param name Property name: The name for helm release. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ClusterHelmApplicationProps#getName}
         * @param name Property name: The name for helm release. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ClusterHelmApplicationProps#getChartValues}
         * @param chartValues Property chartValues: Chart custom values.
         * @return {@code this}
         */
        public Builder chartValues(com.aliyun.ros.cdk.core.IResolvable chartValues) {
            this.chartValues = chartValues;
            return this;
        }

        /**
         * Sets the value of {@link ClusterHelmApplicationProps#getChartValues}
         * @param chartValues Property chartValues: Chart custom values.
         * @return {@code this}
         */
        public Builder chartValues(java.util.Map<java.lang.String, ? extends java.lang.Object> chartValues) {
            this.chartValues = chartValues;
            return this;
        }

        /**
         * Sets the value of {@link ClusterHelmApplicationProps#getCredential}
         * @param credential Property credential: The credential of ACR repo.
         *                   Only take effects when ChartUrl is the address of ACR repo.
         * @return {@code this}
         */
        public Builder credential(com.aliyun.ros.cdk.core.IResolvable credential) {
            this.credential = credential;
            return this;
        }

        /**
         * Sets the value of {@link ClusterHelmApplicationProps#getCredential}
         * @param credential Property credential: The credential of ACR repo.
         *                   Only take effects when ChartUrl is the address of ACR repo.
         * @return {@code this}
         */
        public Builder credential(com.aliyun.ros.cdk.cs.RosClusterHelmApplication.CredentialProperty credential) {
            this.credential = credential;
            return this;
        }

        /**
         * Sets the value of {@link ClusterHelmApplicationProps#getNamespace}
         * @param namespace Property namespace: Namespace to use with helm.
         *                  Default is default.
         *                  If the Namespace does not exist, ROS will automatically create it and delete it during the deletion phase.
         * @return {@code this}
         */
        public Builder namespace(java.lang.String namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link ClusterHelmApplicationProps#getNamespace}
         * @param namespace Property namespace: Namespace to use with helm.
         *                  Default is default.
         *                  If the Namespace does not exist, ROS will automatically create it and delete it during the deletion phase.
         * @return {@code this}
         */
        public Builder namespace(com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link ClusterHelmApplicationProps#getRolePolicy}
         * @param rolePolicy Property rolePolicy: Before deploying the application, check the policies associated with the roles of the current user.
         *                   Valid values:
         *                   <p>
         *                   <ul>
         *                   <li>EnsureAdminRoleAndBinding: Automatically create a role named "ros:application-admin:${user-id}" with administrator permissions and bind it to the current user.</li>
         *                   <li>None: Do nothing.
         *                   The default value is EnsureAdminRoleAndBinding.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder rolePolicy(java.lang.String rolePolicy) {
            this.rolePolicy = rolePolicy;
            return this;
        }

        /**
         * Sets the value of {@link ClusterHelmApplicationProps#getRolePolicy}
         * @param rolePolicy Property rolePolicy: Before deploying the application, check the policies associated with the roles of the current user.
         *                   Valid values:
         *                   <p>
         *                   <ul>
         *                   <li>EnsureAdminRoleAndBinding: Automatically create a role named "ros:application-admin:${user-id}" with administrator permissions and bind it to the current user.</li>
         *                   <li>None: Do nothing.
         *                   The default value is EnsureAdminRoleAndBinding.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder rolePolicy(com.aliyun.ros.cdk.core.IResolvable rolePolicy) {
            this.rolePolicy = rolePolicy;
            return this;
        }

        /**
         * Sets the value of {@link ClusterHelmApplicationProps#getValidationMode}
         * @param validationMode Property validationMode: Validation modes include: - Basic: basic validation, such as verifying the existence of a cluster.
         *                       <ul>
         *                       <li>Strict: in addition to basic validation, also validate the legality of WaitUntil.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder validationMode(java.lang.String validationMode) {
            this.validationMode = validationMode;
            return this;
        }

        /**
         * Sets the value of {@link ClusterHelmApplicationProps#getValidationMode}
         * @param validationMode Property validationMode: Validation modes include: - Basic: basic validation, such as verifying the existence of a cluster.
         *                       <ul>
         *                       <li>Strict: in addition to basic validation, also validate the legality of WaitUntil.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder validationMode(com.aliyun.ros.cdk.core.IResolvable validationMode) {
            this.validationMode = validationMode;
            return this;
        }

        /**
         * Sets the value of {@link ClusterHelmApplicationProps#getWaitUntil}
         * @param waitUntil Property waitUntil: After starting a creation or update, wait until all conditions are met.
         * @return {@code this}
         */
        public Builder waitUntil(com.aliyun.ros.cdk.core.IResolvable waitUntil) {
            this.waitUntil = waitUntil;
            return this;
        }

        /**
         * Sets the value of {@link ClusterHelmApplicationProps#getWaitUntil}
         * @param waitUntil Property waitUntil: After starting a creation or update, wait until all conditions are met.
         * @return {@code this}
         */
        public Builder waitUntil(java.util.List<? extends java.lang.Object> waitUntil) {
            this.waitUntil = waitUntil;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ClusterHelmApplicationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ClusterHelmApplicationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ClusterHelmApplicationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ClusterHelmApplicationProps {
        private final java.lang.Object chartUrl;
        private final java.lang.Object clusterId;
        private final java.lang.Object name;
        private final java.lang.Object chartValues;
        private final java.lang.Object credential;
        private final java.lang.Object namespace;
        private final java.lang.Object rolePolicy;
        private final java.lang.Object validationMode;
        private final java.lang.Object waitUntil;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.chartUrl = software.amazon.jsii.Kernel.get(this, "chartUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterId = software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chartValues = software.amazon.jsii.Kernel.get(this, "chartValues", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.credential = software.amazon.jsii.Kernel.get(this, "credential", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.namespace = software.amazon.jsii.Kernel.get(this, "namespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rolePolicy = software.amazon.jsii.Kernel.get(this, "rolePolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.validationMode = software.amazon.jsii.Kernel.get(this, "validationMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.waitUntil = software.amazon.jsii.Kernel.get(this, "waitUntil", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.chartUrl = java.util.Objects.requireNonNull(builder.chartUrl, "chartUrl is required");
            this.clusterId = java.util.Objects.requireNonNull(builder.clusterId, "clusterId is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.chartValues = builder.chartValues;
            this.credential = builder.credential;
            this.namespace = builder.namespace;
            this.rolePolicy = builder.rolePolicy;
            this.validationMode = builder.validationMode;
            this.waitUntil = builder.waitUntil;
        }

        @Override
        public final java.lang.Object getChartUrl() {
            return this.chartUrl;
        }

        @Override
        public final java.lang.Object getClusterId() {
            return this.clusterId;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getChartValues() {
            return this.chartValues;
        }

        @Override
        public final java.lang.Object getCredential() {
            return this.credential;
        }

        @Override
        public final java.lang.Object getNamespace() {
            return this.namespace;
        }

        @Override
        public final java.lang.Object getRolePolicy() {
            return this.rolePolicy;
        }

        @Override
        public final java.lang.Object getValidationMode() {
            return this.validationMode;
        }

        @Override
        public final java.lang.Object getWaitUntil() {
            return this.waitUntil;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("chartUrl", om.valueToTree(this.getChartUrl()));
            data.set("clusterId", om.valueToTree(this.getClusterId()));
            data.set("name", om.valueToTree(this.getName()));
            if (this.getChartValues() != null) {
                data.set("chartValues", om.valueToTree(this.getChartValues()));
            }
            if (this.getCredential() != null) {
                data.set("credential", om.valueToTree(this.getCredential()));
            }
            if (this.getNamespace() != null) {
                data.set("namespace", om.valueToTree(this.getNamespace()));
            }
            if (this.getRolePolicy() != null) {
                data.set("rolePolicy", om.valueToTree(this.getRolePolicy()));
            }
            if (this.getValidationMode() != null) {
                data.set("validationMode", om.valueToTree(this.getValidationMode()));
            }
            if (this.getWaitUntil() != null) {
                data.set("waitUntil", om.valueToTree(this.getWaitUntil()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.ClusterHelmApplicationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ClusterHelmApplicationProps.Jsii$Proxy that = (ClusterHelmApplicationProps.Jsii$Proxy) o;

            if (!chartUrl.equals(that.chartUrl)) return false;
            if (!clusterId.equals(that.clusterId)) return false;
            if (!name.equals(that.name)) return false;
            if (this.chartValues != null ? !this.chartValues.equals(that.chartValues) : that.chartValues != null) return false;
            if (this.credential != null ? !this.credential.equals(that.credential) : that.credential != null) return false;
            if (this.namespace != null ? !this.namespace.equals(that.namespace) : that.namespace != null) return false;
            if (this.rolePolicy != null ? !this.rolePolicy.equals(that.rolePolicy) : that.rolePolicy != null) return false;
            if (this.validationMode != null ? !this.validationMode.equals(that.validationMode) : that.validationMode != null) return false;
            return this.waitUntil != null ? this.waitUntil.equals(that.waitUntil) : that.waitUntil == null;
        }

        @Override
        public final int hashCode() {
            int result = this.chartUrl.hashCode();
            result = 31 * result + (this.clusterId.hashCode());
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.chartValues != null ? this.chartValues.hashCode() : 0);
            result = 31 * result + (this.credential != null ? this.credential.hashCode() : 0);
            result = 31 * result + (this.namespace != null ? this.namespace.hashCode() : 0);
            result = 31 * result + (this.rolePolicy != null ? this.rolePolicy.hashCode() : 0);
            result = 31 * result + (this.validationMode != null ? this.validationMode.hashCode() : 0);
            result = 31 * result + (this.waitUntil != null ? this.waitUntil.hashCode() : 0);
            return result;
        }
    }
}
