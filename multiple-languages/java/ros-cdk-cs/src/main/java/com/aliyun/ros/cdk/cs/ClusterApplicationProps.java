package com.aliyun.ros.cdk.cs;

/**
 * Properties for defining a <code>ClusterApplication</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusterapplication
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:45.138Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.ClusterApplicationProps")
@software.amazon.jsii.Jsii.Proxy(ClusterApplicationProps.Jsii$Proxy.class)
public interface ClusterApplicationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property clusterId: The ID of the kubernetes cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterId();

    /**
     * Property yamlContent: The yaml content of application.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getYamlContent();

    /**
     * Property defaultNamespace: The default namespace for the application, default value is default.
     * <p>
     * If a namespace is defined in yaml metadata, its priority is higher than DefaultNamespace.
     * If the DefaultNamespace does not exist, ROS will create it automatically and keep it by default during the delete phase.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDefaultNamespace() {
        return null;
    }

    /**
     * Property defaultNamespaceDeletion: Whether to delete the namespace specified by DefaultNamespace.
     * <p>
     * If DefaultNamespace is in ('default', 'kube-node-lease', 'kube-public', 'kube-system', 'arms-prom'), no matter whether DefaultNamespaceDeletion is true or not, it will not be deleted.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDefaultNamespaceDeletion() {
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
     * Property stage: At what stage to run.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>All: all stages, including create, update, and delete.</li>
     * <li>Delete: the delete stage. This means that only in the deletion stage of this resource will apply yaml to the cluster.
     * The default is All.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStage() {
        return null;
    }

    /**
     * Property validationMode: Validation modes include: - Basic: basic validation, such as verifying the existence of a cluster.
     * <p>
     * <ul>
     * <li>Strict: in addition to basic validation, also validate the legality of YamlContent and WaitUntil.</li>
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
     * @return a {@link Builder} of {@link ClusterApplicationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ClusterApplicationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ClusterApplicationProps> {
        java.lang.Object clusterId;
        java.lang.Object yamlContent;
        java.lang.Object defaultNamespace;
        java.lang.Object defaultNamespaceDeletion;
        java.lang.Object rolePolicy;
        java.lang.Object stage;
        java.lang.Object validationMode;
        java.lang.Object waitUntil;

        /**
         * Sets the value of {@link ClusterApplicationProps#getClusterId}
         * @param clusterId Property clusterId: The ID of the kubernetes cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(java.lang.String clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterApplicationProps#getClusterId}
         * @param clusterId Property clusterId: The ID of the kubernetes cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterApplicationProps#getYamlContent}
         * @param yamlContent Property yamlContent: The yaml content of application. This parameter is required.
         * @return {@code this}
         */
        public Builder yamlContent(java.lang.String yamlContent) {
            this.yamlContent = yamlContent;
            return this;
        }

        /**
         * Sets the value of {@link ClusterApplicationProps#getYamlContent}
         * @param yamlContent Property yamlContent: The yaml content of application. This parameter is required.
         * @return {@code this}
         */
        public Builder yamlContent(com.aliyun.ros.cdk.core.IResolvable yamlContent) {
            this.yamlContent = yamlContent;
            return this;
        }

        /**
         * Sets the value of {@link ClusterApplicationProps#getDefaultNamespace}
         * @param defaultNamespace Property defaultNamespace: The default namespace for the application, default value is default.
         *                         If a namespace is defined in yaml metadata, its priority is higher than DefaultNamespace.
         *                         If the DefaultNamespace does not exist, ROS will create it automatically and keep it by default during the delete phase.
         * @return {@code this}
         */
        public Builder defaultNamespace(java.lang.String defaultNamespace) {
            this.defaultNamespace = defaultNamespace;
            return this;
        }

        /**
         * Sets the value of {@link ClusterApplicationProps#getDefaultNamespace}
         * @param defaultNamespace Property defaultNamespace: The default namespace for the application, default value is default.
         *                         If a namespace is defined in yaml metadata, its priority is higher than DefaultNamespace.
         *                         If the DefaultNamespace does not exist, ROS will create it automatically and keep it by default during the delete phase.
         * @return {@code this}
         */
        public Builder defaultNamespace(com.aliyun.ros.cdk.core.IResolvable defaultNamespace) {
            this.defaultNamespace = defaultNamespace;
            return this;
        }

        /**
         * Sets the value of {@link ClusterApplicationProps#getDefaultNamespaceDeletion}
         * @param defaultNamespaceDeletion Property defaultNamespaceDeletion: Whether to delete the namespace specified by DefaultNamespace.
         *                                 If DefaultNamespace is in ('default', 'kube-node-lease', 'kube-public', 'kube-system', 'arms-prom'), no matter whether DefaultNamespaceDeletion is true or not, it will not be deleted.
         * @return {@code this}
         */
        public Builder defaultNamespaceDeletion(java.lang.Boolean defaultNamespaceDeletion) {
            this.defaultNamespaceDeletion = defaultNamespaceDeletion;
            return this;
        }

        /**
         * Sets the value of {@link ClusterApplicationProps#getDefaultNamespaceDeletion}
         * @param defaultNamespaceDeletion Property defaultNamespaceDeletion: Whether to delete the namespace specified by DefaultNamespace.
         *                                 If DefaultNamespace is in ('default', 'kube-node-lease', 'kube-public', 'kube-system', 'arms-prom'), no matter whether DefaultNamespaceDeletion is true or not, it will not be deleted.
         * @return {@code this}
         */
        public Builder defaultNamespaceDeletion(com.aliyun.ros.cdk.core.IResolvable defaultNamespaceDeletion) {
            this.defaultNamespaceDeletion = defaultNamespaceDeletion;
            return this;
        }

        /**
         * Sets the value of {@link ClusterApplicationProps#getRolePolicy}
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
         * Sets the value of {@link ClusterApplicationProps#getRolePolicy}
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
         * Sets the value of {@link ClusterApplicationProps#getStage}
         * @param stage Property stage: At what stage to run.
         *              Valid values:
         *              <p>
         *              <ul>
         *              <li>All: all stages, including create, update, and delete.</li>
         *              <li>Delete: the delete stage. This means that only in the deletion stage of this resource will apply yaml to the cluster.
         *              The default is All.</li>
         *              </ul>
         * @return {@code this}
         */
        public Builder stage(java.lang.String stage) {
            this.stage = stage;
            return this;
        }

        /**
         * Sets the value of {@link ClusterApplicationProps#getStage}
         * @param stage Property stage: At what stage to run.
         *              Valid values:
         *              <p>
         *              <ul>
         *              <li>All: all stages, including create, update, and delete.</li>
         *              <li>Delete: the delete stage. This means that only in the deletion stage of this resource will apply yaml to the cluster.
         *              The default is All.</li>
         *              </ul>
         * @return {@code this}
         */
        public Builder stage(com.aliyun.ros.cdk.core.IResolvable stage) {
            this.stage = stage;
            return this;
        }

        /**
         * Sets the value of {@link ClusterApplicationProps#getValidationMode}
         * @param validationMode Property validationMode: Validation modes include: - Basic: basic validation, such as verifying the existence of a cluster.
         *                       <ul>
         *                       <li>Strict: in addition to basic validation, also validate the legality of YamlContent and WaitUntil.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder validationMode(java.lang.String validationMode) {
            this.validationMode = validationMode;
            return this;
        }

        /**
         * Sets the value of {@link ClusterApplicationProps#getValidationMode}
         * @param validationMode Property validationMode: Validation modes include: - Basic: basic validation, such as verifying the existence of a cluster.
         *                       <ul>
         *                       <li>Strict: in addition to basic validation, also validate the legality of YamlContent and WaitUntil.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder validationMode(com.aliyun.ros.cdk.core.IResolvable validationMode) {
            this.validationMode = validationMode;
            return this;
        }

        /**
         * Sets the value of {@link ClusterApplicationProps#getWaitUntil}
         * @param waitUntil Property waitUntil: After starting a creation or update, wait until all conditions are met.
         * @return {@code this}
         */
        public Builder waitUntil(com.aliyun.ros.cdk.core.IResolvable waitUntil) {
            this.waitUntil = waitUntil;
            return this;
        }

        /**
         * Sets the value of {@link ClusterApplicationProps#getWaitUntil}
         * @param waitUntil Property waitUntil: After starting a creation or update, wait until all conditions are met.
         * @return {@code this}
         */
        public Builder waitUntil(java.util.List<? extends java.lang.Object> waitUntil) {
            this.waitUntil = waitUntil;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ClusterApplicationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ClusterApplicationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ClusterApplicationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ClusterApplicationProps {
        private final java.lang.Object clusterId;
        private final java.lang.Object yamlContent;
        private final java.lang.Object defaultNamespace;
        private final java.lang.Object defaultNamespaceDeletion;
        private final java.lang.Object rolePolicy;
        private final java.lang.Object stage;
        private final java.lang.Object validationMode;
        private final java.lang.Object waitUntil;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterId = software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.yamlContent = software.amazon.jsii.Kernel.get(this, "yamlContent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.defaultNamespace = software.amazon.jsii.Kernel.get(this, "defaultNamespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.defaultNamespaceDeletion = software.amazon.jsii.Kernel.get(this, "defaultNamespaceDeletion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rolePolicy = software.amazon.jsii.Kernel.get(this, "rolePolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.stage = software.amazon.jsii.Kernel.get(this, "stage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.validationMode = software.amazon.jsii.Kernel.get(this, "validationMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.waitUntil = software.amazon.jsii.Kernel.get(this, "waitUntil", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterId = java.util.Objects.requireNonNull(builder.clusterId, "clusterId is required");
            this.yamlContent = java.util.Objects.requireNonNull(builder.yamlContent, "yamlContent is required");
            this.defaultNamespace = builder.defaultNamespace;
            this.defaultNamespaceDeletion = builder.defaultNamespaceDeletion;
            this.rolePolicy = builder.rolePolicy;
            this.stage = builder.stage;
            this.validationMode = builder.validationMode;
            this.waitUntil = builder.waitUntil;
        }

        @Override
        public final java.lang.Object getClusterId() {
            return this.clusterId;
        }

        @Override
        public final java.lang.Object getYamlContent() {
            return this.yamlContent;
        }

        @Override
        public final java.lang.Object getDefaultNamespace() {
            return this.defaultNamespace;
        }

        @Override
        public final java.lang.Object getDefaultNamespaceDeletion() {
            return this.defaultNamespaceDeletion;
        }

        @Override
        public final java.lang.Object getRolePolicy() {
            return this.rolePolicy;
        }

        @Override
        public final java.lang.Object getStage() {
            return this.stage;
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

            data.set("clusterId", om.valueToTree(this.getClusterId()));
            data.set("yamlContent", om.valueToTree(this.getYamlContent()));
            if (this.getDefaultNamespace() != null) {
                data.set("defaultNamespace", om.valueToTree(this.getDefaultNamespace()));
            }
            if (this.getDefaultNamespaceDeletion() != null) {
                data.set("defaultNamespaceDeletion", om.valueToTree(this.getDefaultNamespaceDeletion()));
            }
            if (this.getRolePolicy() != null) {
                data.set("rolePolicy", om.valueToTree(this.getRolePolicy()));
            }
            if (this.getStage() != null) {
                data.set("stage", om.valueToTree(this.getStage()));
            }
            if (this.getValidationMode() != null) {
                data.set("validationMode", om.valueToTree(this.getValidationMode()));
            }
            if (this.getWaitUntil() != null) {
                data.set("waitUntil", om.valueToTree(this.getWaitUntil()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.ClusterApplicationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ClusterApplicationProps.Jsii$Proxy that = (ClusterApplicationProps.Jsii$Proxy) o;

            if (!clusterId.equals(that.clusterId)) return false;
            if (!yamlContent.equals(that.yamlContent)) return false;
            if (this.defaultNamespace != null ? !this.defaultNamespace.equals(that.defaultNamespace) : that.defaultNamespace != null) return false;
            if (this.defaultNamespaceDeletion != null ? !this.defaultNamespaceDeletion.equals(that.defaultNamespaceDeletion) : that.defaultNamespaceDeletion != null) return false;
            if (this.rolePolicy != null ? !this.rolePolicy.equals(that.rolePolicy) : that.rolePolicy != null) return false;
            if (this.stage != null ? !this.stage.equals(that.stage) : that.stage != null) return false;
            if (this.validationMode != null ? !this.validationMode.equals(that.validationMode) : that.validationMode != null) return false;
            return this.waitUntil != null ? this.waitUntil.equals(that.waitUntil) : that.waitUntil == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clusterId.hashCode();
            result = 31 * result + (this.yamlContent.hashCode());
            result = 31 * result + (this.defaultNamespace != null ? this.defaultNamespace.hashCode() : 0);
            result = 31 * result + (this.defaultNamespaceDeletion != null ? this.defaultNamespaceDeletion.hashCode() : 0);
            result = 31 * result + (this.rolePolicy != null ? this.rolePolicy.hashCode() : 0);
            result = 31 * result + (this.stage != null ? this.stage.hashCode() : 0);
            result = 31 * result + (this.validationMode != null ? this.validationMode.hashCode() : 0);
            result = 31 * result + (this.waitUntil != null ? this.waitUntil.hashCode() : 0);
            return result;
        }
    }
}
