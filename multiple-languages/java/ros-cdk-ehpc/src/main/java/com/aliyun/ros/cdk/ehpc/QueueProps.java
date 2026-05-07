package com.aliyun.ros.cdk.ehpc;

/**
 * Properties for defining a <code>Queue</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-queue
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:49.559Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.QueueProps")
@software.amazon.jsii.Jsii.Proxy(QueueProps.Jsii$Proxy.class)
public interface QueueProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property clusterId: The cluster ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterId() {
        return null;
    }

    /**
     * Property computeNodes: The hardware configurations of the compute nodes in the queue.
     * <p>
     * Valid values of N: 1 to 10.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getComputeNodes() {
        return null;
    }

    /**
     * Property enableScaleIn: Specifies whether to enable auto scale-in for the queue.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>true</li>
     * <li>false.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableScaleIn() {
        return null;
    }

    /**
     * Property enableScaleOut: Specifies whether to enable auto scale-out for the queue.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>true</li>
     * <li>false.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableScaleOut() {
        return null;
    }

    /**
     * Property hostnamePrefix: The hostname prefix of the added compute nodes.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHostnamePrefix() {
        return null;
    }

    /**
     * Property hostnameSuffix: The hostname suffix of the compute nodes in the queue.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHostnameSuffix() {
        return null;
    }

    /**
     * Property initialCount: The initial number of compute nodes in the queue.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInitialCount() {
        return null;
    }

    /**
     * Property interConnect: The type of the network for interconnecting compute nodes in the queue.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInterConnect() {
        return null;
    }

    /**
     * Property maxCount: The maximum number of compute nodes that the queue can contain.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxCount() {
        return null;
    }

    /**
     * Property minCount: The minimum number of compute nodes that the queue must contain.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMinCount() {
        return null;
    }

    /**
     * Property queueName: The queue name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQueueName() {
        return null;
    }

    /**
     * Property vSwitchIds: The VSwitches available for use by compute nodes in the queue.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchIds() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link QueueProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link QueueProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<QueueProps> {
        java.lang.Object clusterId;
        java.lang.Object computeNodes;
        java.lang.Object enableScaleIn;
        java.lang.Object enableScaleOut;
        java.lang.Object hostnamePrefix;
        java.lang.Object hostnameSuffix;
        java.lang.Object initialCount;
        java.lang.Object interConnect;
        java.lang.Object maxCount;
        java.lang.Object minCount;
        java.lang.Object queueName;
        java.lang.Object vSwitchIds;

        /**
         * Sets the value of {@link QueueProps#getClusterId}
         * @param clusterId Property clusterId: The cluster ID.
         * @return {@code this}
         */
        public Builder clusterId(java.lang.String clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getClusterId}
         * @param clusterId Property clusterId: The cluster ID.
         * @return {@code this}
         */
        public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getComputeNodes}
         * @param computeNodes Property computeNodes: The hardware configurations of the compute nodes in the queue.
         *                     Valid values of N: 1 to 10.
         * @return {@code this}
         */
        public Builder computeNodes(com.aliyun.ros.cdk.core.IResolvable computeNodes) {
            this.computeNodes = computeNodes;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getComputeNodes}
         * @param computeNodes Property computeNodes: The hardware configurations of the compute nodes in the queue.
         *                     Valid values of N: 1 to 10.
         * @return {@code this}
         */
        public Builder computeNodes(java.util.List<? extends java.lang.Object> computeNodes) {
            this.computeNodes = computeNodes;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getEnableScaleIn}
         * @param enableScaleIn Property enableScaleIn: Specifies whether to enable auto scale-in for the queue.
         *                      Valid values:
         *                      <p>
         *                      <ul>
         *                      <li>true</li>
         *                      <li>false.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder enableScaleIn(java.lang.Boolean enableScaleIn) {
            this.enableScaleIn = enableScaleIn;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getEnableScaleIn}
         * @param enableScaleIn Property enableScaleIn: Specifies whether to enable auto scale-in for the queue.
         *                      Valid values:
         *                      <p>
         *                      <ul>
         *                      <li>true</li>
         *                      <li>false.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder enableScaleIn(com.aliyun.ros.cdk.core.IResolvable enableScaleIn) {
            this.enableScaleIn = enableScaleIn;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getEnableScaleOut}
         * @param enableScaleOut Property enableScaleOut: Specifies whether to enable auto scale-out for the queue.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>true</li>
         *                       <li>false.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder enableScaleOut(java.lang.Boolean enableScaleOut) {
            this.enableScaleOut = enableScaleOut;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getEnableScaleOut}
         * @param enableScaleOut Property enableScaleOut: Specifies whether to enable auto scale-out for the queue.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>true</li>
         *                       <li>false.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder enableScaleOut(com.aliyun.ros.cdk.core.IResolvable enableScaleOut) {
            this.enableScaleOut = enableScaleOut;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getHostnamePrefix}
         * @param hostnamePrefix Property hostnamePrefix: The hostname prefix of the added compute nodes.
         * @return {@code this}
         */
        public Builder hostnamePrefix(java.lang.String hostnamePrefix) {
            this.hostnamePrefix = hostnamePrefix;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getHostnamePrefix}
         * @param hostnamePrefix Property hostnamePrefix: The hostname prefix of the added compute nodes.
         * @return {@code this}
         */
        public Builder hostnamePrefix(com.aliyun.ros.cdk.core.IResolvable hostnamePrefix) {
            this.hostnamePrefix = hostnamePrefix;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getHostnameSuffix}
         * @param hostnameSuffix Property hostnameSuffix: The hostname suffix of the compute nodes in the queue.
         * @return {@code this}
         */
        public Builder hostnameSuffix(java.lang.String hostnameSuffix) {
            this.hostnameSuffix = hostnameSuffix;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getHostnameSuffix}
         * @param hostnameSuffix Property hostnameSuffix: The hostname suffix of the compute nodes in the queue.
         * @return {@code this}
         */
        public Builder hostnameSuffix(com.aliyun.ros.cdk.core.IResolvable hostnameSuffix) {
            this.hostnameSuffix = hostnameSuffix;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getInitialCount}
         * @param initialCount Property initialCount: The initial number of compute nodes in the queue.
         * @return {@code this}
         */
        public Builder initialCount(java.lang.Number initialCount) {
            this.initialCount = initialCount;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getInitialCount}
         * @param initialCount Property initialCount: The initial number of compute nodes in the queue.
         * @return {@code this}
         */
        public Builder initialCount(com.aliyun.ros.cdk.core.IResolvable initialCount) {
            this.initialCount = initialCount;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getInterConnect}
         * @param interConnect Property interConnect: The type of the network for interconnecting compute nodes in the queue.
         * @return {@code this}
         */
        public Builder interConnect(java.lang.String interConnect) {
            this.interConnect = interConnect;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getInterConnect}
         * @param interConnect Property interConnect: The type of the network for interconnecting compute nodes in the queue.
         * @return {@code this}
         */
        public Builder interConnect(com.aliyun.ros.cdk.core.IResolvable interConnect) {
            this.interConnect = interConnect;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getMaxCount}
         * @param maxCount Property maxCount: The maximum number of compute nodes that the queue can contain.
         * @return {@code this}
         */
        public Builder maxCount(java.lang.Number maxCount) {
            this.maxCount = maxCount;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getMaxCount}
         * @param maxCount Property maxCount: The maximum number of compute nodes that the queue can contain.
         * @return {@code this}
         */
        public Builder maxCount(com.aliyun.ros.cdk.core.IResolvable maxCount) {
            this.maxCount = maxCount;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getMinCount}
         * @param minCount Property minCount: The minimum number of compute nodes that the queue must contain.
         * @return {@code this}
         */
        public Builder minCount(java.lang.Number minCount) {
            this.minCount = minCount;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getMinCount}
         * @param minCount Property minCount: The minimum number of compute nodes that the queue must contain.
         * @return {@code this}
         */
        public Builder minCount(com.aliyun.ros.cdk.core.IResolvable minCount) {
            this.minCount = minCount;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getQueueName}
         * @param queueName Property queueName: The queue name.
         * @return {@code this}
         */
        public Builder queueName(java.lang.String queueName) {
            this.queueName = queueName;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getQueueName}
         * @param queueName Property queueName: The queue name.
         * @return {@code this}
         */
        public Builder queueName(com.aliyun.ros.cdk.core.IResolvable queueName) {
            this.queueName = queueName;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getVSwitchIds}
         * @param vSwitchIds Property vSwitchIds: The VSwitches available for use by compute nodes in the queue.
         * @return {@code this}
         */
        public Builder vSwitchIds(com.aliyun.ros.cdk.core.IResolvable vSwitchIds) {
            this.vSwitchIds = vSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getVSwitchIds}
         * @param vSwitchIds Property vSwitchIds: The VSwitches available for use by compute nodes in the queue.
         * @return {@code this}
         */
        public Builder vSwitchIds(java.util.List<? extends java.lang.Object> vSwitchIds) {
            this.vSwitchIds = vSwitchIds;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link QueueProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public QueueProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link QueueProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements QueueProps {
        private final java.lang.Object clusterId;
        private final java.lang.Object computeNodes;
        private final java.lang.Object enableScaleIn;
        private final java.lang.Object enableScaleOut;
        private final java.lang.Object hostnamePrefix;
        private final java.lang.Object hostnameSuffix;
        private final java.lang.Object initialCount;
        private final java.lang.Object interConnect;
        private final java.lang.Object maxCount;
        private final java.lang.Object minCount;
        private final java.lang.Object queueName;
        private final java.lang.Object vSwitchIds;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterId = software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.computeNodes = software.amazon.jsii.Kernel.get(this, "computeNodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableScaleIn = software.amazon.jsii.Kernel.get(this, "enableScaleIn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableScaleOut = software.amazon.jsii.Kernel.get(this, "enableScaleOut", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostnamePrefix = software.amazon.jsii.Kernel.get(this, "hostnamePrefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostnameSuffix = software.amazon.jsii.Kernel.get(this, "hostnameSuffix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.initialCount = software.amazon.jsii.Kernel.get(this, "initialCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.interConnect = software.amazon.jsii.Kernel.get(this, "interConnect", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxCount = software.amazon.jsii.Kernel.get(this, "maxCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.minCount = software.amazon.jsii.Kernel.get(this, "minCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.queueName = software.amazon.jsii.Kernel.get(this, "queueName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchIds = software.amazon.jsii.Kernel.get(this, "vSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterId = builder.clusterId;
            this.computeNodes = builder.computeNodes;
            this.enableScaleIn = builder.enableScaleIn;
            this.enableScaleOut = builder.enableScaleOut;
            this.hostnamePrefix = builder.hostnamePrefix;
            this.hostnameSuffix = builder.hostnameSuffix;
            this.initialCount = builder.initialCount;
            this.interConnect = builder.interConnect;
            this.maxCount = builder.maxCount;
            this.minCount = builder.minCount;
            this.queueName = builder.queueName;
            this.vSwitchIds = builder.vSwitchIds;
        }

        @Override
        public final java.lang.Object getClusterId() {
            return this.clusterId;
        }

        @Override
        public final java.lang.Object getComputeNodes() {
            return this.computeNodes;
        }

        @Override
        public final java.lang.Object getEnableScaleIn() {
            return this.enableScaleIn;
        }

        @Override
        public final java.lang.Object getEnableScaleOut() {
            return this.enableScaleOut;
        }

        @Override
        public final java.lang.Object getHostnamePrefix() {
            return this.hostnamePrefix;
        }

        @Override
        public final java.lang.Object getHostnameSuffix() {
            return this.hostnameSuffix;
        }

        @Override
        public final java.lang.Object getInitialCount() {
            return this.initialCount;
        }

        @Override
        public final java.lang.Object getInterConnect() {
            return this.interConnect;
        }

        @Override
        public final java.lang.Object getMaxCount() {
            return this.maxCount;
        }

        @Override
        public final java.lang.Object getMinCount() {
            return this.minCount;
        }

        @Override
        public final java.lang.Object getQueueName() {
            return this.queueName;
        }

        @Override
        public final java.lang.Object getVSwitchIds() {
            return this.vSwitchIds;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getClusterId() != null) {
                data.set("clusterId", om.valueToTree(this.getClusterId()));
            }
            if (this.getComputeNodes() != null) {
                data.set("computeNodes", om.valueToTree(this.getComputeNodes()));
            }
            if (this.getEnableScaleIn() != null) {
                data.set("enableScaleIn", om.valueToTree(this.getEnableScaleIn()));
            }
            if (this.getEnableScaleOut() != null) {
                data.set("enableScaleOut", om.valueToTree(this.getEnableScaleOut()));
            }
            if (this.getHostnamePrefix() != null) {
                data.set("hostnamePrefix", om.valueToTree(this.getHostnamePrefix()));
            }
            if (this.getHostnameSuffix() != null) {
                data.set("hostnameSuffix", om.valueToTree(this.getHostnameSuffix()));
            }
            if (this.getInitialCount() != null) {
                data.set("initialCount", om.valueToTree(this.getInitialCount()));
            }
            if (this.getInterConnect() != null) {
                data.set("interConnect", om.valueToTree(this.getInterConnect()));
            }
            if (this.getMaxCount() != null) {
                data.set("maxCount", om.valueToTree(this.getMaxCount()));
            }
            if (this.getMinCount() != null) {
                data.set("minCount", om.valueToTree(this.getMinCount()));
            }
            if (this.getQueueName() != null) {
                data.set("queueName", om.valueToTree(this.getQueueName()));
            }
            if (this.getVSwitchIds() != null) {
                data.set("vSwitchIds", om.valueToTree(this.getVSwitchIds()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.QueueProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            QueueProps.Jsii$Proxy that = (QueueProps.Jsii$Proxy) o;

            if (this.clusterId != null ? !this.clusterId.equals(that.clusterId) : that.clusterId != null) return false;
            if (this.computeNodes != null ? !this.computeNodes.equals(that.computeNodes) : that.computeNodes != null) return false;
            if (this.enableScaleIn != null ? !this.enableScaleIn.equals(that.enableScaleIn) : that.enableScaleIn != null) return false;
            if (this.enableScaleOut != null ? !this.enableScaleOut.equals(that.enableScaleOut) : that.enableScaleOut != null) return false;
            if (this.hostnamePrefix != null ? !this.hostnamePrefix.equals(that.hostnamePrefix) : that.hostnamePrefix != null) return false;
            if (this.hostnameSuffix != null ? !this.hostnameSuffix.equals(that.hostnameSuffix) : that.hostnameSuffix != null) return false;
            if (this.initialCount != null ? !this.initialCount.equals(that.initialCount) : that.initialCount != null) return false;
            if (this.interConnect != null ? !this.interConnect.equals(that.interConnect) : that.interConnect != null) return false;
            if (this.maxCount != null ? !this.maxCount.equals(that.maxCount) : that.maxCount != null) return false;
            if (this.minCount != null ? !this.minCount.equals(that.minCount) : that.minCount != null) return false;
            if (this.queueName != null ? !this.queueName.equals(that.queueName) : that.queueName != null) return false;
            return this.vSwitchIds != null ? this.vSwitchIds.equals(that.vSwitchIds) : that.vSwitchIds == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clusterId != null ? this.clusterId.hashCode() : 0;
            result = 31 * result + (this.computeNodes != null ? this.computeNodes.hashCode() : 0);
            result = 31 * result + (this.enableScaleIn != null ? this.enableScaleIn.hashCode() : 0);
            result = 31 * result + (this.enableScaleOut != null ? this.enableScaleOut.hashCode() : 0);
            result = 31 * result + (this.hostnamePrefix != null ? this.hostnamePrefix.hashCode() : 0);
            result = 31 * result + (this.hostnameSuffix != null ? this.hostnameSuffix.hashCode() : 0);
            result = 31 * result + (this.initialCount != null ? this.initialCount.hashCode() : 0);
            result = 31 * result + (this.interConnect != null ? this.interConnect.hashCode() : 0);
            result = 31 * result + (this.maxCount != null ? this.maxCount.hashCode() : 0);
            result = 31 * result + (this.minCount != null ? this.minCount.hashCode() : 0);
            result = 31 * result + (this.queueName != null ? this.queueName.hashCode() : 0);
            result = 31 * result + (this.vSwitchIds != null ? this.vSwitchIds.hashCode() : 0);
            return result;
        }
    }
}
