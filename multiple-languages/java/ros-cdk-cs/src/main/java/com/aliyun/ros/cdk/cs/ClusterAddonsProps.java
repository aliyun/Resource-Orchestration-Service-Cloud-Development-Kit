package com.aliyun.ros.cdk.cs;

/**
 * Properties for defining a <code>ClusterAddons</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusteraddons
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:08.294Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.ClusterAddonsProps")
@software.amazon.jsii.Jsii.Proxy(ClusterAddonsProps.Jsii$Proxy.class)
public interface ClusterAddonsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property addons: A combination of addon plugins for Kubernetes clusters.
     * <p>
     * Network plug-in: including Flannel and Terway network plug-ins
     * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
     * Ingress: The installation of the Ingress component is enabled by default.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAddons();

    /**
     * Property clusterId: Cluster ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterId();

    /**
     * Property installedIgnore: Whether to ignore already installed addons when creating.
     * <p>
     * If true, when creating, only install addons that are not yet installed. When deleting, only uninstall addons that are installed during the creation stage.
     * Default false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstalledIgnore() {
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
     * @return a {@link Builder} of {@link ClusterAddonsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ClusterAddonsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ClusterAddonsProps> {
        java.lang.Object addons;
        java.lang.Object clusterId;
        java.lang.Object installedIgnore;
        java.lang.Object rolePolicy;
        java.lang.Object validationMode;
        java.lang.Object waitUntil;

        /**
         * Sets the value of {@link ClusterAddonsProps#getAddons}
         * @param addons Property addons: A combination of addon plugins for Kubernetes clusters. This parameter is required.
         *               Network plug-in: including Flannel and Terway network plug-ins
         *               Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
         *               Ingress: The installation of the Ingress component is enabled by default.
         * @return {@code this}
         */
        public Builder addons(com.aliyun.ros.cdk.core.IResolvable addons) {
            this.addons = addons;
            return this;
        }

        /**
         * Sets the value of {@link ClusterAddonsProps#getAddons}
         * @param addons Property addons: A combination of addon plugins for Kubernetes clusters. This parameter is required.
         *               Network plug-in: including Flannel and Terway network plug-ins
         *               Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
         *               Ingress: The installation of the Ingress component is enabled by default.
         * @return {@code this}
         */
        public Builder addons(java.util.List<? extends java.lang.Object> addons) {
            this.addons = addons;
            return this;
        }

        /**
         * Sets the value of {@link ClusterAddonsProps#getClusterId}
         * @param clusterId Property clusterId: Cluster ID. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(java.lang.String clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterAddonsProps#getClusterId}
         * @param clusterId Property clusterId: Cluster ID. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterAddonsProps#getInstalledIgnore}
         * @param installedIgnore Property installedIgnore: Whether to ignore already installed addons when creating.
         *                        If true, when creating, only install addons that are not yet installed. When deleting, only uninstall addons that are installed during the creation stage.
         *                        Default false.
         * @return {@code this}
         */
        public Builder installedIgnore(java.lang.Boolean installedIgnore) {
            this.installedIgnore = installedIgnore;
            return this;
        }

        /**
         * Sets the value of {@link ClusterAddonsProps#getInstalledIgnore}
         * @param installedIgnore Property installedIgnore: Whether to ignore already installed addons when creating.
         *                        If true, when creating, only install addons that are not yet installed. When deleting, only uninstall addons that are installed during the creation stage.
         *                        Default false.
         * @return {@code this}
         */
        public Builder installedIgnore(com.aliyun.ros.cdk.core.IResolvable installedIgnore) {
            this.installedIgnore = installedIgnore;
            return this;
        }

        /**
         * Sets the value of {@link ClusterAddonsProps#getRolePolicy}
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
         * Sets the value of {@link ClusterAddonsProps#getRolePolicy}
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
         * Sets the value of {@link ClusterAddonsProps#getValidationMode}
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
         * Sets the value of {@link ClusterAddonsProps#getValidationMode}
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
         * Sets the value of {@link ClusterAddonsProps#getWaitUntil}
         * @param waitUntil Property waitUntil: After starting a creation or update, wait until all conditions are met.
         * @return {@code this}
         */
        public Builder waitUntil(com.aliyun.ros.cdk.core.IResolvable waitUntil) {
            this.waitUntil = waitUntil;
            return this;
        }

        /**
         * Sets the value of {@link ClusterAddonsProps#getWaitUntil}
         * @param waitUntil Property waitUntil: After starting a creation or update, wait until all conditions are met.
         * @return {@code this}
         */
        public Builder waitUntil(java.util.List<? extends java.lang.Object> waitUntil) {
            this.waitUntil = waitUntil;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ClusterAddonsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ClusterAddonsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ClusterAddonsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ClusterAddonsProps {
        private final java.lang.Object addons;
        private final java.lang.Object clusterId;
        private final java.lang.Object installedIgnore;
        private final java.lang.Object rolePolicy;
        private final java.lang.Object validationMode;
        private final java.lang.Object waitUntil;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.addons = software.amazon.jsii.Kernel.get(this, "addons", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterId = software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.installedIgnore = software.amazon.jsii.Kernel.get(this, "installedIgnore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rolePolicy = software.amazon.jsii.Kernel.get(this, "rolePolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.validationMode = software.amazon.jsii.Kernel.get(this, "validationMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.waitUntil = software.amazon.jsii.Kernel.get(this, "waitUntil", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.addons = java.util.Objects.requireNonNull(builder.addons, "addons is required");
            this.clusterId = java.util.Objects.requireNonNull(builder.clusterId, "clusterId is required");
            this.installedIgnore = builder.installedIgnore;
            this.rolePolicy = builder.rolePolicy;
            this.validationMode = builder.validationMode;
            this.waitUntil = builder.waitUntil;
        }

        @Override
        public final java.lang.Object getAddons() {
            return this.addons;
        }

        @Override
        public final java.lang.Object getClusterId() {
            return this.clusterId;
        }

        @Override
        public final java.lang.Object getInstalledIgnore() {
            return this.installedIgnore;
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

            data.set("addons", om.valueToTree(this.getAddons()));
            data.set("clusterId", om.valueToTree(this.getClusterId()));
            if (this.getInstalledIgnore() != null) {
                data.set("installedIgnore", om.valueToTree(this.getInstalledIgnore()));
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.ClusterAddonsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ClusterAddonsProps.Jsii$Proxy that = (ClusterAddonsProps.Jsii$Proxy) o;

            if (!addons.equals(that.addons)) return false;
            if (!clusterId.equals(that.clusterId)) return false;
            if (this.installedIgnore != null ? !this.installedIgnore.equals(that.installedIgnore) : that.installedIgnore != null) return false;
            if (this.rolePolicy != null ? !this.rolePolicy.equals(that.rolePolicy) : that.rolePolicy != null) return false;
            if (this.validationMode != null ? !this.validationMode.equals(that.validationMode) : that.validationMode != null) return false;
            return this.waitUntil != null ? this.waitUntil.equals(that.waitUntil) : that.waitUntil == null;
        }

        @Override
        public final int hashCode() {
            int result = this.addons.hashCode();
            result = 31 * result + (this.clusterId.hashCode());
            result = 31 * result + (this.installedIgnore != null ? this.installedIgnore.hashCode() : 0);
            result = 31 * result + (this.rolePolicy != null ? this.rolePolicy.hashCode() : 0);
            result = 31 * result + (this.validationMode != null ? this.validationMode.hashCode() : 0);
            result = 31 * result + (this.waitUntil != null ? this.waitUntil.hashCode() : 0);
            return result;
        }
    }
}
