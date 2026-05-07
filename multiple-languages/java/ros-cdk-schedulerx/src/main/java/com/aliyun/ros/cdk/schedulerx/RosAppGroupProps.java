package com.aliyun.ros.cdk.schedulerx;

/**
 * Properties for defining a <code>RosAppGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-appgroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:54.054Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.schedulerx.$Module.class, fqn = "@alicloud/ros-cdk-schedulerx.RosAppGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosAppGroupProps.Jsii$Proxy.class)
public interface RosAppGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAppName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNamespace();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAppKey() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAppType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAppVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableLog() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxJobs() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMonitorConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMonitorContacts() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNamespaceName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNamespaceSource() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNotificationPolicyName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScheduleBusyWorkers() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAppGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAppGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAppGroupProps> {
        java.lang.Object appName;
        java.lang.Object groupId;
        java.lang.Object namespace;
        java.lang.Object appKey;
        java.lang.Object appType;
        java.lang.Object appVersion;
        java.lang.Object description;
        java.lang.Object enableLog;
        java.lang.Object maxJobs;
        java.lang.Object monitorConfig;
        java.lang.Object monitorContacts;
        java.lang.Object namespaceName;
        java.lang.Object namespaceSource;
        java.lang.Object notificationPolicyName;
        java.lang.Object scheduleBusyWorkers;

        /**
         * Sets the value of {@link RosAppGroupProps#getAppName}
         * @param appName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder appName(java.lang.String appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link RosAppGroupProps#getAppName}
         * @param appName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder appName(com.aliyun.ros.cdk.core.IResolvable appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link RosAppGroupProps#getGroupId}
         * @param groupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(java.lang.String groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link RosAppGroupProps#getGroupId}
         * @param groupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link RosAppGroupProps#getNamespace}
         * @param namespace the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder namespace(java.lang.String namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link RosAppGroupProps#getNamespace}
         * @param namespace the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder namespace(com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link RosAppGroupProps#getAppKey}
         * @param appKey the value to be set.
         * @return {@code this}
         */
        public Builder appKey(java.lang.String appKey) {
            this.appKey = appKey;
            return this;
        }

        /**
         * Sets the value of {@link RosAppGroupProps#getAppKey}
         * @param appKey the value to be set.
         * @return {@code this}
         */
        public Builder appKey(com.aliyun.ros.cdk.core.IResolvable appKey) {
            this.appKey = appKey;
            return this;
        }

        /**
         * Sets the value of {@link RosAppGroupProps#getAppType}
         * @param appType the value to be set.
         * @return {@code this}
         */
        public Builder appType(java.lang.Number appType) {
            this.appType = appType;
            return this;
        }

        /**
         * Sets the value of {@link RosAppGroupProps#getAppType}
         * @param appType the value to be set.
         * @return {@code this}
         */
        public Builder appType(com.aliyun.ros.cdk.core.IResolvable appType) {
            this.appType = appType;
            return this;
        }

        /**
         * Sets the value of {@link RosAppGroupProps#getAppVersion}
         * @param appVersion the value to be set.
         * @return {@code this}
         */
        public Builder appVersion(java.lang.Number appVersion) {
            this.appVersion = appVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosAppGroupProps#getAppVersion}
         * @param appVersion the value to be set.
         * @return {@code this}
         */
        public Builder appVersion(com.aliyun.ros.cdk.core.IResolvable appVersion) {
            this.appVersion = appVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosAppGroupProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosAppGroupProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosAppGroupProps#getEnableLog}
         * @param enableLog the value to be set.
         * @return {@code this}
         */
        public Builder enableLog(java.lang.Boolean enableLog) {
            this.enableLog = enableLog;
            return this;
        }

        /**
         * Sets the value of {@link RosAppGroupProps#getEnableLog}
         * @param enableLog the value to be set.
         * @return {@code this}
         */
        public Builder enableLog(com.aliyun.ros.cdk.core.IResolvable enableLog) {
            this.enableLog = enableLog;
            return this;
        }

        /**
         * Sets the value of {@link RosAppGroupProps#getMaxJobs}
         * @param maxJobs the value to be set.
         * @return {@code this}
         */
        public Builder maxJobs(java.lang.Number maxJobs) {
            this.maxJobs = maxJobs;
            return this;
        }

        /**
         * Sets the value of {@link RosAppGroupProps#getMaxJobs}
         * @param maxJobs the value to be set.
         * @return {@code this}
         */
        public Builder maxJobs(com.aliyun.ros.cdk.core.IResolvable maxJobs) {
            this.maxJobs = maxJobs;
            return this;
        }

        /**
         * Sets the value of {@link RosAppGroupProps#getMonitorConfig}
         * @param monitorConfig the value to be set.
         * @return {@code this}
         */
        public Builder monitorConfig(com.aliyun.ros.cdk.core.IResolvable monitorConfig) {
            this.monitorConfig = monitorConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosAppGroupProps#getMonitorConfig}
         * @param monitorConfig the value to be set.
         * @return {@code this}
         */
        public Builder monitorConfig(java.util.Map<java.lang.String, ? extends java.lang.Object> monitorConfig) {
            this.monitorConfig = monitorConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosAppGroupProps#getMonitorContacts}
         * @param monitorContacts the value to be set.
         * @return {@code this}
         */
        public Builder monitorContacts(java.util.List<? extends java.lang.Object> monitorContacts) {
            this.monitorContacts = monitorContacts;
            return this;
        }

        /**
         * Sets the value of {@link RosAppGroupProps#getMonitorContacts}
         * @param monitorContacts the value to be set.
         * @return {@code this}
         */
        public Builder monitorContacts(com.aliyun.ros.cdk.core.IResolvable monitorContacts) {
            this.monitorContacts = monitorContacts;
            return this;
        }

        /**
         * Sets the value of {@link RosAppGroupProps#getNamespaceName}
         * @param namespaceName the value to be set.
         * @return {@code this}
         */
        public Builder namespaceName(java.lang.String namespaceName) {
            this.namespaceName = namespaceName;
            return this;
        }

        /**
         * Sets the value of {@link RosAppGroupProps#getNamespaceName}
         * @param namespaceName the value to be set.
         * @return {@code this}
         */
        public Builder namespaceName(com.aliyun.ros.cdk.core.IResolvable namespaceName) {
            this.namespaceName = namespaceName;
            return this;
        }

        /**
         * Sets the value of {@link RosAppGroupProps#getNamespaceSource}
         * @param namespaceSource the value to be set.
         * @return {@code this}
         */
        public Builder namespaceSource(java.lang.String namespaceSource) {
            this.namespaceSource = namespaceSource;
            return this;
        }

        /**
         * Sets the value of {@link RosAppGroupProps#getNamespaceSource}
         * @param namespaceSource the value to be set.
         * @return {@code this}
         */
        public Builder namespaceSource(com.aliyun.ros.cdk.core.IResolvable namespaceSource) {
            this.namespaceSource = namespaceSource;
            return this;
        }

        /**
         * Sets the value of {@link RosAppGroupProps#getNotificationPolicyName}
         * @param notificationPolicyName the value to be set.
         * @return {@code this}
         */
        public Builder notificationPolicyName(java.lang.String notificationPolicyName) {
            this.notificationPolicyName = notificationPolicyName;
            return this;
        }

        /**
         * Sets the value of {@link RosAppGroupProps#getNotificationPolicyName}
         * @param notificationPolicyName the value to be set.
         * @return {@code this}
         */
        public Builder notificationPolicyName(com.aliyun.ros.cdk.core.IResolvable notificationPolicyName) {
            this.notificationPolicyName = notificationPolicyName;
            return this;
        }

        /**
         * Sets the value of {@link RosAppGroupProps#getScheduleBusyWorkers}
         * @param scheduleBusyWorkers the value to be set.
         * @return {@code this}
         */
        public Builder scheduleBusyWorkers(java.lang.Boolean scheduleBusyWorkers) {
            this.scheduleBusyWorkers = scheduleBusyWorkers;
            return this;
        }

        /**
         * Sets the value of {@link RosAppGroupProps#getScheduleBusyWorkers}
         * @param scheduleBusyWorkers the value to be set.
         * @return {@code this}
         */
        public Builder scheduleBusyWorkers(com.aliyun.ros.cdk.core.IResolvable scheduleBusyWorkers) {
            this.scheduleBusyWorkers = scheduleBusyWorkers;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAppGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAppGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAppGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAppGroupProps {
        private final java.lang.Object appName;
        private final java.lang.Object groupId;
        private final java.lang.Object namespace;
        private final java.lang.Object appKey;
        private final java.lang.Object appType;
        private final java.lang.Object appVersion;
        private final java.lang.Object description;
        private final java.lang.Object enableLog;
        private final java.lang.Object maxJobs;
        private final java.lang.Object monitorConfig;
        private final java.lang.Object monitorContacts;
        private final java.lang.Object namespaceName;
        private final java.lang.Object namespaceSource;
        private final java.lang.Object notificationPolicyName;
        private final java.lang.Object scheduleBusyWorkers;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.appName = software.amazon.jsii.Kernel.get(this, "appName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.namespace = software.amazon.jsii.Kernel.get(this, "namespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.appKey = software.amazon.jsii.Kernel.get(this, "appKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.appType = software.amazon.jsii.Kernel.get(this, "appType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.appVersion = software.amazon.jsii.Kernel.get(this, "appVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableLog = software.amazon.jsii.Kernel.get(this, "enableLog", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxJobs = software.amazon.jsii.Kernel.get(this, "maxJobs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.monitorConfig = software.amazon.jsii.Kernel.get(this, "monitorConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.monitorContacts = software.amazon.jsii.Kernel.get(this, "monitorContacts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.namespaceName = software.amazon.jsii.Kernel.get(this, "namespaceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.namespaceSource = software.amazon.jsii.Kernel.get(this, "namespaceSource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.notificationPolicyName = software.amazon.jsii.Kernel.get(this, "notificationPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scheduleBusyWorkers = software.amazon.jsii.Kernel.get(this, "scheduleBusyWorkers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.appName = java.util.Objects.requireNonNull(builder.appName, "appName is required");
            this.groupId = java.util.Objects.requireNonNull(builder.groupId, "groupId is required");
            this.namespace = java.util.Objects.requireNonNull(builder.namespace, "namespace is required");
            this.appKey = builder.appKey;
            this.appType = builder.appType;
            this.appVersion = builder.appVersion;
            this.description = builder.description;
            this.enableLog = builder.enableLog;
            this.maxJobs = builder.maxJobs;
            this.monitorConfig = builder.monitorConfig;
            this.monitorContacts = builder.monitorContacts;
            this.namespaceName = builder.namespaceName;
            this.namespaceSource = builder.namespaceSource;
            this.notificationPolicyName = builder.notificationPolicyName;
            this.scheduleBusyWorkers = builder.scheduleBusyWorkers;
        }

        @Override
        public final java.lang.Object getAppName() {
            return this.appName;
        }

        @Override
        public final java.lang.Object getGroupId() {
            return this.groupId;
        }

        @Override
        public final java.lang.Object getNamespace() {
            return this.namespace;
        }

        @Override
        public final java.lang.Object getAppKey() {
            return this.appKey;
        }

        @Override
        public final java.lang.Object getAppType() {
            return this.appType;
        }

        @Override
        public final java.lang.Object getAppVersion() {
            return this.appVersion;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getEnableLog() {
            return this.enableLog;
        }

        @Override
        public final java.lang.Object getMaxJobs() {
            return this.maxJobs;
        }

        @Override
        public final java.lang.Object getMonitorConfig() {
            return this.monitorConfig;
        }

        @Override
        public final java.lang.Object getMonitorContacts() {
            return this.monitorContacts;
        }

        @Override
        public final java.lang.Object getNamespaceName() {
            return this.namespaceName;
        }

        @Override
        public final java.lang.Object getNamespaceSource() {
            return this.namespaceSource;
        }

        @Override
        public final java.lang.Object getNotificationPolicyName() {
            return this.notificationPolicyName;
        }

        @Override
        public final java.lang.Object getScheduleBusyWorkers() {
            return this.scheduleBusyWorkers;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("appName", om.valueToTree(this.getAppName()));
            data.set("groupId", om.valueToTree(this.getGroupId()));
            data.set("namespace", om.valueToTree(this.getNamespace()));
            if (this.getAppKey() != null) {
                data.set("appKey", om.valueToTree(this.getAppKey()));
            }
            if (this.getAppType() != null) {
                data.set("appType", om.valueToTree(this.getAppType()));
            }
            if (this.getAppVersion() != null) {
                data.set("appVersion", om.valueToTree(this.getAppVersion()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getEnableLog() != null) {
                data.set("enableLog", om.valueToTree(this.getEnableLog()));
            }
            if (this.getMaxJobs() != null) {
                data.set("maxJobs", om.valueToTree(this.getMaxJobs()));
            }
            if (this.getMonitorConfig() != null) {
                data.set("monitorConfig", om.valueToTree(this.getMonitorConfig()));
            }
            if (this.getMonitorContacts() != null) {
                data.set("monitorContacts", om.valueToTree(this.getMonitorContacts()));
            }
            if (this.getNamespaceName() != null) {
                data.set("namespaceName", om.valueToTree(this.getNamespaceName()));
            }
            if (this.getNamespaceSource() != null) {
                data.set("namespaceSource", om.valueToTree(this.getNamespaceSource()));
            }
            if (this.getNotificationPolicyName() != null) {
                data.set("notificationPolicyName", om.valueToTree(this.getNotificationPolicyName()));
            }
            if (this.getScheduleBusyWorkers() != null) {
                data.set("scheduleBusyWorkers", om.valueToTree(this.getScheduleBusyWorkers()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-schedulerx.RosAppGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAppGroupProps.Jsii$Proxy that = (RosAppGroupProps.Jsii$Proxy) o;

            if (!appName.equals(that.appName)) return false;
            if (!groupId.equals(that.groupId)) return false;
            if (!namespace.equals(that.namespace)) return false;
            if (this.appKey != null ? !this.appKey.equals(that.appKey) : that.appKey != null) return false;
            if (this.appType != null ? !this.appType.equals(that.appType) : that.appType != null) return false;
            if (this.appVersion != null ? !this.appVersion.equals(that.appVersion) : that.appVersion != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.enableLog != null ? !this.enableLog.equals(that.enableLog) : that.enableLog != null) return false;
            if (this.maxJobs != null ? !this.maxJobs.equals(that.maxJobs) : that.maxJobs != null) return false;
            if (this.monitorConfig != null ? !this.monitorConfig.equals(that.monitorConfig) : that.monitorConfig != null) return false;
            if (this.monitorContacts != null ? !this.monitorContacts.equals(that.monitorContacts) : that.monitorContacts != null) return false;
            if (this.namespaceName != null ? !this.namespaceName.equals(that.namespaceName) : that.namespaceName != null) return false;
            if (this.namespaceSource != null ? !this.namespaceSource.equals(that.namespaceSource) : that.namespaceSource != null) return false;
            if (this.notificationPolicyName != null ? !this.notificationPolicyName.equals(that.notificationPolicyName) : that.notificationPolicyName != null) return false;
            return this.scheduleBusyWorkers != null ? this.scheduleBusyWorkers.equals(that.scheduleBusyWorkers) : that.scheduleBusyWorkers == null;
        }

        @Override
        public final int hashCode() {
            int result = this.appName.hashCode();
            result = 31 * result + (this.groupId.hashCode());
            result = 31 * result + (this.namespace.hashCode());
            result = 31 * result + (this.appKey != null ? this.appKey.hashCode() : 0);
            result = 31 * result + (this.appType != null ? this.appType.hashCode() : 0);
            result = 31 * result + (this.appVersion != null ? this.appVersion.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.enableLog != null ? this.enableLog.hashCode() : 0);
            result = 31 * result + (this.maxJobs != null ? this.maxJobs.hashCode() : 0);
            result = 31 * result + (this.monitorConfig != null ? this.monitorConfig.hashCode() : 0);
            result = 31 * result + (this.monitorContacts != null ? this.monitorContacts.hashCode() : 0);
            result = 31 * result + (this.namespaceName != null ? this.namespaceName.hashCode() : 0);
            result = 31 * result + (this.namespaceSource != null ? this.namespaceSource.hashCode() : 0);
            result = 31 * result + (this.notificationPolicyName != null ? this.notificationPolicyName.hashCode() : 0);
            result = 31 * result + (this.scheduleBusyWorkers != null ? this.scheduleBusyWorkers.hashCode() : 0);
            return result;
        }
    }
}
